"use strict";

import Utils from './modules/utils.js';
import WarpModal from './modules/modal.js';
import {WarpSeatFactory,WarpSeat} from './modules/seat.js';
import { Calendar, Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';
import ZoneUserData from './modules/zoneuserdata.js';
import BookAs from './modules/bookas.js';
"use strict";
// Rimuoviamo noUiSlider e il relativo CSS perché non lo usiamo più
// import noUiSlider from 'nouislider';
// import "./css/zone/nouislider_materialize.scss";

// La variabile globale che contiene il range orario selezionato (in secondi)
window.selectedTimeRange = [0, 24 * 3600];

function downloadSeatData(seatFactory) {
    var url = window.warpGlobals.URLs['getSeat'];
    var login = seatFactory.getLogin();
    if (login !== window.warpGlobals.login)
        url += "?login=" + login;

    Utils.xhr.get(url, { toastOnSuccess: false })
        .then(function (v) {
            seatFactory.setSeatsData(v.response);
            seatFactory.updateAllStates(getSelectedDates());
        });
}

function getSelectedDates() {
    // Utilizziamo il range orario aggiornato dal calendario
    var times = window.selectedTimeRange || [0, 24 * 3600];

    // Se il valore massimo è 24:00 (in secondi) lo riportiamo a 23:59
    if (times[1] == 24 * 3600)
        times[1] = 24 * 3600 - 1;

    var res = [];
    for (var e of document.getElementsByClassName('date_checkbox')) {
        if (e.checked) {
            res.push({
                fromTS: parseInt(e.value) + parseInt(times[0]),
                toTS: parseInt(e.value) + parseInt(times[1])
            });
        }
    }
    return res;
}

function initSlider() {
    // Configurazione del calendario:
    // "selectionTimeMode" indica la modalità oraria (24 ore)
    // "onChangeTime" viene chiamato ogni volta che l'utente modifica l'orario
    const options = {
        selectionTimeMode: 24,
        onChangeTime(self) {
            console.log("Selected time:", self.context.selectedTime);
            if (Array.isArray(self.context.selectedTime)) {
                const [minTime, maxTime] = self.context.selectedTime;
                document.getElementById('timeslider-min').innerText = formatTime(minTime);
                document.getElementById('timeslider-max').innerText = (maxTime === 24 * 3600) ? "23:59" : formatTime(maxTime);
                // Aggiorniamo la variabile globale con il range selezionato
                window.selectedTimeRange = [minTime, maxTime];
                // Aggiorniamo anche il sessionStorage
                let zoneSelections = JSON.parse(window.sessionStorage.getItem('zoneSelections')) || {};
                zoneSelections.slider = [minTime, maxTime];
                window.sessionStorage.setItem('zoneSelections', JSON.stringify(zoneSelections));
            }
        }
    };

    // Inizializza il calendario sul selettore "#timeslider"
    const calendar = new Calendar('#timeslider', options);
    calendar.init();
    // Salviamo l'istanza del calendario se serve in futuro
    window.myCalendar = calendar;

    // Funzione helper per formattare l'orario (da secondi a "HH:MM")
    function formatTime(timeInSeconds) {
        return new Date(timeInSeconds * 1000).toISOString().substring(11, 16);
    }
}

function initSeats() {
    var seatFactory = new WarpSeatFactory(
        window.warpGlobals.URLs['seatSprite'],
        "zonemap",
        window.warpGlobals.login
    );

    // Aggiorna lo stato dei posti in base al range di date/orari selezionati
    var updateSeatsView = function () {
        var dates = getSelectedDates();
        seatFactory.updateAllStates(dates);
    };

    // Dal momento che ora il "slider" è gestito dal calendario, 
    // la chiamata all'update avviene via onChangeTime del calendario (vedi initSlider)
    // Aggiungiamo comunque il listener per le checkbox
    for (var e of document.getElementsByClassName('date_checkbox')) {
        e.addEventListener('change', updateSeatsView);
    }

    return seatFactory;
}

function initSeatPreview(seatFactory) {
    var zoneMap = document.getElementById("zonemap");

    seatFactory.on('mouseover', function () {
        var previewDiv = document.createElement("div");
        previewDiv.className = 'seat_preview';

        var previewTitle = previewDiv.appendChild(document.createElement("div"));
        previewTitle.innerText = TR("Seat %{seat_name}", { seat_name: this.getName() });
        previewTitle.className = "seat_preview_title";

        var pands = this.getPositionAndSize();
        var parentWidth = zoneMap.clientWidth;
        var clientPosX = pands.x - zoneMap.scrollLeft;

        if (clientPosX < parentWidth / 2) {
            previewDiv.style.right = "";
            previewDiv.style.left = (pands.x + pands.size * 0.70) + "px";
        }
        else {
            previewDiv.style.left = "";
            previewDiv.style.right = (parentWidth - pands.x - pands.size * 0.30) + "px";
        }

        var parentHeight = zoneMap.clientHeight;
        var clientPosY = pands.y;

        if (clientPosY < parentHeight / 2) {
            previewDiv.style.top = (pands.y + pands.size * 0.70) + "px";
            previewDiv.style.bottom = "";
        }
        else {
            previewDiv.style.top = "";
            previewDiv.style.bottom = (parentHeight - pands.y - pands.size * 0.30) + "px";
        }

        var assignments = Object.values(this.getAssignments());
        if (assignments.length) {
            var header = previewDiv.appendChild(document.createElement("span"));
            header.appendChild(document.createTextNode(TR("Assigned to:")));
            header.className = "seat_preview_header";

            var table = previewDiv.appendChild(document.createElement("table"));
            for (let a of assignments) {
                var tr = table.appendChild(document.createElement("tr"));
                tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(a));
            }
        }

        var bookings = this.getBookings();
        if (bookings.length) {
            var header = previewDiv.appendChild(document.createElement("span"));
            header.appendChild(document.createTextNode(TR("Bookings:")));
            header.className = "seat_preview_header";

            var table = previewDiv.appendChild(document.createElement("table"));
            var maxToShow = 8;

            for (var b of bookings) {
                if (maxToShow-- == 0) {
                    b.datetime1 = "...";
                    b.datetime2 = "";
                    b.username = "";
                }

                var tr = table.appendChild(document.createElement("tr"));
                tr.appendChild(document.createElement("td")).innerText = b.datetime1;
                tr.appendChild(document.createElement("td")).innerText = b.datetime2;
                tr.appendChild(document.createElement("td")).innerText = b.username;

                if (maxToShow == 0)
                    break;
            }
        }
        zoneMap.appendChild(previewDiv);
    });

    seatFactory.on('mouseout', function () {
        var previewDivs = document.getElementsByClassName('seat_preview');
        for (var d of previewDivs) {
            d.remove();
        }
    });
}

function initAssignedSeatsModal(seat) {
    var assignModalEl = document.getElementById("assigned_seat_modal");
    if (!assignModalEl || typeof (ZoneUserData) === 'undefined')
        return null;

    var assignModal = M.Modal.getInstance(assignModalEl);
    if (!assignModal) {
        assignModal = M.Modal.init(assignModalEl, {});
    }

    var zoneUserData = ZoneUserData.getInstance();
    var chipsEl = document.getElementById('assigned_seat_chips');
    var chipsOptions;
    var chips = M.Chips.getInstance(chipsEl);
    if (chips) {
        chipsOptions = chips.options;
        chips.destroy();
    }
    else {
        var onChipApp = function (chip) {
            var i = this.chipsData.length - 1;
            var t = this.chipsData[i].tag;
            if (!(t in this.autocomplete.options.data)) {
                this.deleteChip(i);
            }
        };

        var chipsAutocompleteData = {};
        for (let d of zoneUserData.formatedIterator()) {
            chipsAutocompleteData[d] = null;
        }

        chipsOptions = {
            autocompleteOptions: {
                data: chipsAutocompleteData,
                minLength: 1,
                dropdownOptions: {
                    container: document.body,
                    constrainWidth: false
                }
            },
            limit: Infinity,
            onChipAdd: onChipApp
        };
    }

    chips = M.Chips.init(chipsEl, chipsOptions);
    var assignments = seat.getAssignments();
    for (let login in assignments) {
        chips.addChip({ tag: ZoneUserData.makeUserStr(login, assignments[login]) });
    }
    return assignModal;
}

function initActionMenu(seatFactory) {
    if (window.warpGlobals.isZoneViewer)
        return;

    var seat = null;
    var actionEl = document.getElementById('action_modal');
    var actionModal = M.Modal.init(actionEl);
    var actionBtns = document.getElementsByClassName('zone_action_btn');

    seatFactory.on('click', function () {
        var state = this.getState();
        if (state == WarpSeat.SeatStates.NOT_AVAILABLE)
            return;

        var actions = [];
        var bookMsg = false;
        var removeMsg = false;

        switch (state) {
            case WarpSeat.SeatStates.CAN_BOOK:
                actions.push('book');
                bookMsg = true;
                break;
            case WarpSeat.SeatStates.CAN_CHANGE:
                actions.push('delete');
                // non interrompiamo qui
            case WarpSeat.SeatStates.CAN_REBOOK:
                actions.push('update');
                bookMsg = removeMsg = true;
                break;
            case WarpSeat.SeatStates.CAN_DELETE:
            case WarpSeat.SeatStates.CAN_DELETE_EXACT:
                actions.push('delete');
                removeMsg = true;
                break;
        };

        if (window.warpGlobals.isZoneAdmin) {
            actions.push('assign-modal');
            actions.push('assign');
            if (state == WarpSeat.SeatStates.DISABLED)
                actions.push('enable');
            else
                actions.push('disable');
        }

        if (!actions.length)
            return;

        let msg1El = document.getElementById("action_modal_msg1");
        msg1El.innerHTML = "";

        if (bookMsg) {
            var bookDatesTable = document.createElement("table");
            for (let d of getSelectedDates()) {
                let f = WarpSeatFactory._formatDatePair(d);
                let tr = bookDatesTable.appendChild(document.createElement("tr"));
                tr.appendChild(document.createElement("td")).innerText = f.datetime1;
                tr.appendChild(document.createElement("td")).innerText = f.datetime2;
            }
            let p = document.createElement('P');
            p.innerText = TR("Seat %{seat_name} to be booked:", { seat_name: this.getName() });
            msg1El.appendChild(p);
            msg1El.appendChild(bookDatesTable);
        }

        let msg2El = document.getElementById("action_modal_msg2");
        msg2El.innerHTML = "";

        if (removeMsg) {
            var myConflictsTable = document.createElement("table");
            for (let c of seatFactory.getMyConflictingBookings()) {
                let tr = myConflictsTable.appendChild(document.createElement("tr"));
                tr.appendChild(document.createElement("td")).innerText = c.zone_name;
                tr.appendChild(document.createElement("td")).innerText = c.seat_name;
                tr.appendChild(document.createElement("td")).innerText = c.datetime1;
                tr.appendChild(document.createElement("td")).innerText = c.datetime2;
            }
            let p = document.createElement('P');
            p.innerText = TR("To be removed:");
            msg2El.appendChild(p);
            msg2El.appendChild(myConflictsTable);
        }

        for (let btn of actionBtns) {
            btn.style.display = actions.includes(btn.dataset.action) ? "inline-block" : "none";
        }

        seat = this;
        actionModal.open();
    });

    var actionBtnClicked = function (e) {
        if (this.dataset.action == 'assign-modal') {
            var assignModal = initAssignedSeatsModal(seat);
            document.getElementById('assigned_seat_chips').focus();
            assignModal.open();
            return;
        }

        var applyData = {};
        if (this.dataset.action == "assign" && typeof (ZoneUserData) !== 'undefined') {
            var chipsEl = document.getElementById('assigned_seat_chips');
            var chips = M.Chips.getInstance(chipsEl);
            var logins = [];
            for (var c of chips.getData()) {
                logins.push(ZoneUserData.makeUserStrRev(c.tag));
            }
            applyData['assign'] = {
                sid: seat.getSid(),
                logins: logins
            };
        }

        if (this.dataset.action == 'enable' || this.dataset.action == 'disable') {
            applyData[this.dataset.action] = [seat.getSid()];
        }

        if (this.dataset.action == 'book' || this.dataset.action == 'update') {
            applyData['book'] = {
                sid: seat.getSid(),
                dates: getSelectedDates()
            };
            if (window.warpGlobals.isZoneAdmin) {
                let login = BookAs.getInstance().getSelectedLogin(true);
                if (login !== null)
                    applyData['book']['login'] = login;
            }
        }

        if (this.dataset.action == 'delete' || this.dataset.action == 'update') {
            applyData['remove'] = seatFactory.getMyConflictingBookings(true);
        }

        Utils.xhr.post(
            window.warpGlobals.URLs['zoneApply'],
            applyData,
            { toastOnSuccess: false }
        ).then((value) => {
            var msg = "";
            if (value.response.conflicts_in_disable) {
                msg += TR("Seat is successfully disabled.<br>However there are existing reservations in the the next few weeks. " +
                    "Existing reservations are not automatically removed, it has to be done manually.<br><br>");
                let rList = [];
                for (let r of value.response.conflicts_in_disable) {
                    let dateStr = WarpSeatFactory._formatDatePair(r);
                    rList.push(r.username + "&nbsp;on&nbsp;" + dateStr.datetime1 + "&nbsp;" + dateStr.datetime2);
                }
                msg += rList.join('<br>');
            }

            if (value.response.conflicts_in_assign) {
                msg += TR("Seat is successfully assigned.<br>However there are non-assignees' existing reservations in the the next few weeks. " +
                    "Existing reservations are not automatically removed, it has to be done manually.<br><br>");
                let rList = [];
                for (let r of value.response.conflicts_in_assign) {
                    let dateStr = WarpSeatFactory._formatDatePair(r);
                    rList.push(r.username + "&nbsp;on&nbsp;" + dateStr.datetime1 + "&nbsp;" + dateStr.datetime2);
                }
                msg += rList.join('<br>');
            }

            if (msg == "")
                M.toast({ text: TR('Action successfull.') });
            else
                WarpModal.getInstance().open(TR("Warning"), msg);

            downloadSeatData(seatFactory);
        }).catch((value) => {
            downloadSeatData(seatFactory);
        });
    };

    for (let btn of actionBtns)
        btn.addEventListener('click', actionBtnClicked);

    return actionModal;
}

function initDateSelectorStorage() {
    var storage = window.sessionStorage;
    var restoredSelections = storage.getItem('zoneSelections');
    restoredSelections = restoredSelections ? JSON.parse(restoredSelections) : window.warpGlobals['defaultSelectedDates'];
    let cleanCBSelections = [];

    // Se niente è selezionato, forziamo il default (2 tentativi)
    for (let i = 0; i < 2; ++i) {
        for (let cb of document.getElementsByClassName('date_checkbox')) {
            let ts = parseInt(cb.value);
            if (restoredSelections.cb.includes(ts)) {
                cb.checked = true;
                cleanCBSelections.push(ts);
            }
        }
        if (cleanCBSelections.length)
            break;
        restoredSelections.cb = window.warpGlobals['defaultSelectedDates'].cb;
    }
    restoredSelections.cb = cleanCBSelections;

    // Aggiorniamo manualmente il display del calendario con il valore ripristinato
    if (restoredSelections.slider) {
        window.selectedTimeRange = restoredSelections.slider;
        const minDiv = document.getElementById('timeslider-min');
        const maxDiv = document.getElementById('timeslider-max');
        function formatTime(timeInSeconds) {
            return new Date(timeInSeconds * 1000).toISOString().substring(11, 16);
        }
        minDiv.innerText = formatTime(restoredSelections.slider[0]);
        maxDiv.innerText = (restoredSelections.slider[1] == 24 * 3600 ? "23:59" : formatTime(restoredSelections.slider[1]));
    }

    storage.setItem('zoneSelections', JSON.stringify(restoredSelections));

    var cbChange = function (e) {
        let zoneSelections = JSON.parse(storage.getItem('zoneSelections'));
        let ts = parseInt(this.value);
        if (this.checked)
            zoneSelections.cb.push(ts);
        else
            zoneSelections.cb.splice(zoneSelections.cb.indexOf(ts), 1);
        storage.setItem('zoneSelections', JSON.stringify(zoneSelections));
    };

    for (let cb of document.getElementsByClassName('date_checkbox'))
        cb.addEventListener('change', cbChange);
    // Non serve più associare eventi al vecchio noUiSlider
}

function initShiftSelectDates() {
    var lastSelectedValue = 0;
    for (let cb of document.getElementsByClassName('date_checkbox')) {
        if (cb.checked) {
            if (lastSelectedValue === 0)
                lastSelectedValue = parseInt(cb.value);
            else
                lastSelectedValue = Math.min(parseInt(cb.value), lastSelectedValue);
        }
    }

    var cbClick = function (e) {
        if (e.shiftKey) {
            var targetState = this.checked;
            var minValue = Math.min(parseInt(this.value), lastSelectedValue);
            var maxValue = Math.max(parseInt(this.value), lastSelectedValue);
            for (let cb of document.getElementsByClassName('date_checkbox')) {
                if (parseInt(cb.value) >= minValue && parseInt(cb.value) <= maxValue) {
                    if (cb != this && cb.checked != targetState) {
                        cb.checked = targetState;
                        cb.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
                    }
                }
            }
        }
        lastSelectedValue = parseInt(this.value);
    };

    for (let cb of document.getElementsByClassName('date_checkbox'))
        cb.addEventListener('click', cbClick);
}

function initZoneHelp() {
    var helpModalEl = document.getElementById('zonemap_help_modal');
    var helpModal = M.Modal.init(helpModalEl);
    var helpModalSpriteDivs = document.getElementsByClassName("help_modal_sprite");
    for (let d of helpModalSpriteDivs) {
        d.style.width = WarpSeat.Sprites.spriteSize + "px";
        d.style.height = WarpSeat.Sprites.spriteSize + "px";
        d.style.backgroundImage = 'url(' + window.warpGlobals.URLs['seatSprite'] + ')';
        var type = d.dataset.sprite + "Offset";
        d.style.backgroundPositionX = WarpSeat.Sprites[type];
    }
    var helpDiv = document.getElementsByClassName("zonemap_help");
    for (let d of helpDiv) {
        d.addEventListener('click', function () { helpModal.open(); });
    }
}

function initZoneSidepanel() {
    var el = document.getElementById('zone_sidepanel');
    M.Sidenav.init(el, {
        onCloseEnd: function (e) {
            e.style.transform = "";
        }
    });
}

function initBookAs(seatFactory) {
    BookAs.getInstance().on('change', function (newLogin) {
        var url = window.warpGlobals.URLs['getSeat'] + "?onlyOtherZone=1&login=" + newLogin;
        Utils.xhr.get(url, { toastOnSuccess: false })
            .then(function (v) {
                seatFactory.updateLogin(newLogin, v.response);
                seatFactory.updateAllStates(getSelectedDates());
            });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
    initDateSelectorStorage();
    initShiftSelectDates();

    var seatFactory = initSeats();
    initSeatPreview(seatFactory);
    initActionMenu(seatFactory);
    initZoneHelp();
    initZoneSidepanel();

    downloadSeatData(seatFactory);

    if (window.warpGlobals.isZoneAdmin) {
        ZoneUserData.init();
        initBookAs(seatFactory);
    }
});
