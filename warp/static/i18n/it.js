warpGlobals.i18n = { locale: 'it' }

warpGlobals.i18n.weekdaysShort = [ 'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab' ];

warpGlobals.i18n.datePicker = {
    firstDay: 0,    // primo giorno della settimana
    i18n_object: {
        cancel: 'Annulla',
        clear: 'Cancella',
        done: 'Ok',
        previousMonth: '<',
        nextMonth: '>',
        months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        weekdaysShort: warpGlobals.i18n.weekdaysShort,
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
    },
};

warpGlobals.i18n.tabulatorLangs = {
    "default": {    // mantenere default, così non è necessario impostare la lingua
        "groups": {
            "item": "elemento",
            "items": "elementi",
        },
        "columns": {
        },
        "data": {
            "loading": "",   // viene mostrato solo il caricamento
            "error": "Errore",
        },
        "pagination": {
            "page_size": "Dimensione Pagina",
            "page_title": "Mostra Pagina",
            "first": "|«",
            "first_title": "Prima Pagina",
            "last": "»|",
            "last_title": "Ultima Pagina",
            "prev": "«",
            "prev_title": "Pagina Precedente",
            "next": "»",
            "next_title": "Pagina Successiva",
            "all": "Tutti",
        },
        "headerFilters": {
            "default": "filtro",
            "columns": {}
        }
    }
};

warpGlobals.i18n.phrases = {
    btn: {
        "Login": "Accedi",
        "Add": "Aggiungi",
        "Cancel": "Annulla",
        "Delete": "Elimina",
        "Save": "Salva",
        'Yes': 'Sì',
        'No': 'No',
        'Ok': 'Ok',
        'Set': 'Imposta',
        "YES, I'M SURE": "SÌ, SONO SICURO",
        "Generate password": "Genera password",
        "Book": "Prenota",
        "Update": "Aggiorna",
        "Remove": "Rimuovi",
        "Assign": "Assegna",
        "Enable": "Abilita",
        "Disable": "Disabilita",
        "Upload map": "Carica mappa",
        "Add seats": "Aggiungi posti",
        "Done adding": "Aggiunta completata",
        "Restore": "Ripristina",
        "Align all": "Allinea tutto",
        "Finish alignment": "Termina allineamento",
    },
    'Password': 'Password',
    'Bookings': 'Prenotazioni',
    'Report': 'Report',
    'Users': 'Utenti',
    'Groups': 'Gruppi',
    'User name': 'Nome utente',
    'Zone': 'Zona',
    'Seat': 'Posto',
    'Time': 'Data di Prenotazione',
    'Login': 'Username',
    'From': 'Da',
    'To': 'A',
    'Type': 'Tipo',
    'Group id': 'ID gruppo',
    'Group name': 'Nome gruppo',
    "Group name cannot be empty.": "Il nome del gruppo non può essere vuoto.",
    "Are you sure to delete group: %{group}": "Sei sicuro di voler eliminare il gruppo: %{group}?",
    "Select user": "Seleziona utente",
    'Members of: %{group}': 'Membri di: %{group}',
    "Are you sure to remove %{user} from group %{group}?": "Sei sicuro di voler rimuovere %{user} dal gruppo %{group}?",
    "Add to group %{group}": "Aggiungi al gruppo %{group}",
    'Action successfull.': 'Azione riuscita.',
    'Error': 'Errore',
    'Something went wrong (status=%{status}).': 'Qualcosa è andato storto (status=%{status}).',
    'Other error.': 'Altro errore.',
    'Are you sure to delete this booking?': 'Sei sicuro di voler eliminare questa prenotazione?',
    "Are you sure?": "Sei sicuro?",
    "Account type": "Tipo di account",
    "Retype password": "Ridigita la password",
    accountTypes: {
        "Admin": "Amministratore",
        "User": "Utente",
        "BLOCKED": "BLOCCATO",
    },
    "Passwords don't match": "Le password non corrispondono",
    "Name cannot be empty.": "Il nome non può essere vuoto",
    "All fields are mandatory": "Tutti i campi sono obbligatori",
    "ARE YOU SURE TO DELETE USER: %{user}?": "SEI SICURO DI VOLER ELIMINARE L'UTENTE: %{user}?",
    "User has XXX booking(s) ...": 
        "L'utente ha una prenotazione nel passato. Eliminando l'utente verrà eliminata anche la prenotazione passata dal report.||||" + 
        "L'utente ha %{smart_count} prenotazioni nel passato. Eliminando l'utente verranno eliminate le prenotazioni passate dal report.",
    "You will delete the log of user's past bookings. It is usually a better idea to BLOCK the user.":
        "Eliminerai il log delle prenotazioni passate dell'utente. Di solito è meglio BLOCCARE l'utente.",
    "Are you sure to delete user: %{user}": "Sei sicuro di voler eliminare l'utente: %{user}?",
    "Select users to which the seat will be assigned:": "Seleziona gli utenti a cui verrà assegnato il posto:",
    "The seat is available to be booked on the selected dates and time.":
        "Il posto è disponibile per essere prenotato nelle date e orari selezionati.",
    "The seat is available to be booked on the selected dates and time. However, you have other bookings at that time which will be automatically updated.":
        "Il posto è disponibile per essere prenotato nelle date e orari selezionati. Tuttavia, hai altre prenotazioni in quel momento che verranno automaticamente aggiornate.",
    "The seat is booked by another person or not available.":
        "Il posto è prenotato da un'altra persona o non disponibile.",
    "The seat is booked by you on the selected date and time.":
        "Il posto è prenotato da te nella data e orario selezionati.",
    "The seat is booked by you, but not exactly on the selected date or time. You can update booking, all your other reservations at that time will be automatically updated.":
        "Il posto è prenotato da te, ma non esattamente nella data o orario selezionato. Puoi aggiornare la prenotazione, tutte le tue altre prenotazioni in quel momento verranno automaticamente aggiornate.",
    "The seat is booked by you, but not exactly on the selected date or time. You CANNOT update the booking as it is conflicting with another user booking.":
        "Il posto è prenotato da te, ma non esattamente nella data o orario selezionato. NON PUOI aggiornare la prenotazione poiché entra in conflitto con la prenotazione di un altro utente.",
    "The same meaning as the green type icon, but the seat is assigned to you, not assigned people cannot book it. Note that assignment isn't necessarily exclusive, the seat can be assigned to more than one person.":
        "Lo stesso significato dell'icona verde, ma il posto è assegnato a te, le persone non assegnate non possono prenotarlo. Nota che l'assegnazione non è necessariamente esclusiva, il posto può essere assegnato a più di una persona.",
    "The seat is disabled, cannot be booked, and is not visible to non-admins.":
        "Il posto è disabilitato, non può essere prenotato ed è invisibile agli utenti non amministratori.",
    "The seat is assigned to some people. This status is visible only to admins. Note that you won't see this icon if the seat is assigned to you.":
        "Il posto è assegnato a alcune persone. Questo stato è visibile solo agli amministratori. Nota che non vedrai questa icona se il posto è assegnato a te.",
    "Book as": "Prenota come",
    "Seat %{seat_name}": "Posto %{seat_name}",
    "Assigned to:": "Assegnato a:",
    "Bookings:": "Prenotazioni:",
    "Seat %{seat_name} to be booked:": "Posto %{seat_name} da prenotare:",
    "To be removed:": "Da rimuovere:",
    "Seat is successfully disabled.<br>However there are existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>":
        "Il posto è stato disabilitato con successo.<br> Tuttavia, ci sono prenotazioni esistenti nelle prossime settimane. Le prenotazioni esistenti non vengono rimosse automaticamente, deve essere fatto manualmente.<br><br>",
    "Seat is successfully assigned.<br>However there are non-assignees' existing reservations in the the next few weeks. Existing reservations are not automatically removed, it has to be done manually.<br><br>":
        "Il posto è stato assegnato con successo.<br> Tuttavia, ci sono prenotazioni esistenti di non assegnatari nelle prossime settimane. Le prenotazioni esistenti non vengono rimosse automaticamente, deve essere fatto manualmente.<br><br>",
    "Warning": "Attenzione",
    "Change unsuccessfull": "Modifica non riuscita",
    "Zones": "Zone",
    "Zone name": "Nome zona",
    "Zone group": "Numero zona",
    "Num of admins": "Numero di amministratori",
    "Num of users": "Numero di utenti",
    "Num of viewers": "Numero di spettatori",
    "Manage users": "Gestisci utenti",
    'Edit zone': "Modifica zona",
    'Edit map': "Modifica mappa",
    "You will delete the log of all past bookings in this zone. It is usually a better idea to unassign all users from the zone to make it inaccessible.":
        "Eliminerai il log di tutte le prenotazioni passate in questa zona. Di solito è meglio rimuovere tutti gli utenti dalla zona per renderla inaccessibile.",
    "Are you sure to delete zone: %{zone_name}": "Sei sicuro di voler eliminare la zona: %{zone_name}?",
    "Zone name and zone group cannot be empty.": "Il nome della zona e il gruppo della zona non possono essere vuoti, il gruppo zona puo essere solo un numero.",
    'Users assigned to: %{zone_name}': 'Utenti assegnati a: %{zone_name}',
    "Zone role": "Ruolo zona",    
    zoneRoles: {
        "ZoneAdmin": "Amministratore zona",
        "User": "Utente",
        "Viewer": "Spettatore",
    },
    "Assign to zone: %{zone_name}": "Assegna alla zona: %{zone_name}",
    "Are you sure to unassign %{user} from the zone?": "Sei sicuro di voler rimuovere %{user} dalla zona?",
    'User/group name': 'Nome',
    errorCode: {
        "Forbidden (%{code})": "Forbidden (%{code})",
        "Other error. (status=%{status} code=%{code})": "Altro errore. (status=%{status} code=%{code})",
        "Other error. (status=%{status})": "Altro errore. (status=%{status})",
        "213": "Il gruppo con questo id esiste già. (%{code})",
        "155": 'L\'utente/gruppo con questo login esiste già. (%{code})',
        "102": "Non hai i permessi richiesti nella zona. (%{code})",
        "103": "Data errata. (%{code})",
        "104": "Non hai i permessi richiesti nella zona. (%{code})",
        "105": "Non hai i permessi richiesti nella zona. (%{code})",
        "106": "Il posto non è assegnato a te. (%{code})",
        "109": "Non puoi prenotare, il posto è già stato prenotato da qualcun altro. (%{code})",
    },
    "Are you sure to update the zone?": "Sei sicuro di voler aggiornare la zona?",
    "The following changes will be applied:<br>": "Le seguenti modifiche verranno applicate:<br>",
    "- updated zone map<br>": "- mappa della zona aggiornata<br>",
    "- added %{smart_count} seat(s)<br>":
        "- aggiunto un posto<br>||||"+
        "- aggiunti %{smart_count} posti<br>",
    "- updated data of %{smart_count} seat(s)<br>":
        "- dati di un posto aggiornati<br>||||"+
        "- dati di %{smart_count} posti aggiornati<br>",
    "- deleted %{smart_count} seat(s)<br>":
        "- un posto eliminato<br>||||"+
        "- %{smart_count} posti eliminati<br>",
    seatEdit: {
        "Seat name": "Nome posto",
        "X": "X",
        "Y": "Y",
    },
    "All unsaved changes will be lost.": "Tutte le modifiche non salvate verranno perse.",
    "More than %{smart_count} rows are selected. Report will be limited to that number of rows.":
        "Più di una riga è selezionata. Il report sarà limitato a quel numero di righe.||||"+
        "Sono selezionate più di %{smart_count} righe. Il report sarà limitato a quel numero di righe.",
    "Add to group": "Aggiungi al gruppo",    
};
