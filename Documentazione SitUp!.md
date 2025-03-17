# SitUp

  

## Panoramica

SitUp è un sistema di prenotazione delle postazioni progettato per aiutare le organizzazioni a gestire gli spazi di lavoro in modo efficiente. Con SitUp, i dipendenti possono facilmente prenotare scrivanie e altre risorse, garantendo un ambiente di lavoro organizzato e senza intoppi.

## Funzionalita'

-   **Prenotazione delle postazioni**: Prenota le scrivanie in anticipo per garantirne la disponibilità.
    
-   **Gestione utenti**: Amministra ruoli e permessi degli utenti.
    
-   **Notifiche**: Ricevi notifiche via email o SMS per prenotazioni e cancellazioni.
    
-   **Analisi**: Monitora l’utilizzo e genera report per ottimizzare la gestione degli spazi.

# 🛠 Tecnologie Utilizzate

Questa sezione fornisce una panoramica delle tecnologie utilizzate nel progetto **SitUp**.

## 📌 **Linguaggi di Programmazione**

-   **Python** 🐍 → Utilizzato per il backend e le API (Flask).
-   **JavaScript** ⚡ → Utilizzato per la gestione dell’interfaccia utente e interazioni dinamiche.
-   **SCSS/CSS** 🎨 → Stili avanzati e gestione del layout.
-   **SQL** 🗄 → Utilizzato per la gestione del database PostgreSQL.

## 📌 **Framework e Librerie**

### 🔹 Backend

-   **Flask** 🌍 → Framework web leggero per la gestione delle API.

### 🔹 Frontend

-   **Webpack** 📦 → Bundler per ottimizzare i file JS/CSS.
-   **Materialize CSS** 🎨 → Framework CSS per il design responsivo.
-   **Tabulator.js** 📊 → Libreria per la gestione avanzata delle tabelle.

## 📌 **Database e Storage**

-   **PostgreSQL** 🐘 → Database relazionale per la gestione dei dati.

## 📌 **Container e Virtualizzazione**

-   **Docker** 🐳 → Contenitori per distribuire il progetto in ambienti isolati.
-   **Docker Compose** 🔧 → Gestione di più container per l’applicazione.

## 📌 **Gestione del Codice e Automazione**

-   **Git** 🖥 → Versionamento del codice.
-   **GitHub** 🌍 → Repository per la collaborazione e il controllo delle versioni.

## 📌 **Internazionalizzazione**

-   **Polyglot** 🌍 → Gestione delle traduzioni multi-lingua.

## 📌 **Altri Strumenti**

-   **Nginx** 🚀 → Server proxy per gestire le richieste HTTP.

----------

# Struttura del Progetto

La seguente sezione descrive la struttura del progetto **SitUp**, fornendo una panoramica delle cartelle e dei file principali.

## 📂 Struttura delle Cartelle

``` 
situp/
├── js/                  # Contiene script principali e file di configurazione
│   ├── base/           # Stili principali e script di configurazione delle traduzioni
│   ├── views/          # File statici (CSS, JS, immagini) per interfaccia utente e gestione del sistema
│   ├── css/            # File SCSS per tabulator.js
│   ├── modules/        # Script per il sistema di prenotazione
│   ├── webpack.config.js # Configurazione Webpack per ottimizzazione del progetto
│
├── res/                 # File per test e immagini delle planimetrie
│
├── warp/                # Contiene template HTML, file SQL, file generati dal bundler e file Python per il backend
│   ├── sql/           # File SQL per inserimento dati e creazione tabelle in PostgreSQL
│   ├── static/        # File generati dal bundler, script di traduzione, immagini e file Materialize CSS
│   ├── templates/     # File HTML delle varie pagine dell'applicazione
│   ├── xhr/           # File Python per API basate su Flask
│
├── requirements.txt      # Elenco delle dipendenze Python
├── demo-compose.yml      # Configurazione Docker Compose per esecuzione multipli container (demo progetto)
├── setup.py             # Configurazione del pacchetto Warp
├── Dockerfile           # Definizione dell'immagine Docker per l'intero progetto
└── README.md            # Documentazione del progetto

```

## 📌 Descrizione delle Componenti Principali

### 🔹 **Frontend**

-   **`js/`**: Contiene tutti i file JavaScript, inclusi gli script di configurazione e di gestione dell'interfaccia utente.
    -   **`base/`**: Contiene gli stili principali e gli script per la gestione delle traduzioni.
    -   **`views/`**: File statici (CSS, JS, immagini) relativi all'interfaccia utente.
    -   **`css/`**: File SCSS utilizzati da **Tabulator.js** per la gestione delle tabelle.
    -   **`modules/`**: Contiene gli script per il sistema di prenotazione.
    -   **`webpack.config.js`**: Configurazione di **Webpack** per ottimizzare il codice e gestire le dipendenze.

### 🔹 **Backend**

-   **`warp/`**: Contiene file backend e risorse per l'applicazione.
    -   **`sql/`**: File SQL per la creazione delle tabelle e l'inserimento dei dati in **PostgreSQL**.
    -   **`static/`**: File generati dal bundler, script di traduzione, immagini e file **Materialize CSS**.
    -   **`templates/`**: File **HTML** delle pagine dell'applicazione.
    -   **`xhr/`**: Contiene API backend basate su **Flask**.

### 🔹 **Configurazione e Deployment**

-   **`requirements.txt`**: Elenco delle dipendenze Python necessarie per eseguire il progetto.
-   **`setup.py`**: File di configurazione per il pacchetto **Warp**.
-   **`demo-compose.yml`**: Configurazione **Docker Compose** per avviare più container per la demo del progetto.
-   **`Dockerfile`**: Definizione dell'immagine Docker per l'intero progetto.
-   **`README.md`**: Documentazione del progetto.

## 🚀 **Come Avviare il Progetto**

### 1️⃣ **Installazione delle Dipendenze**

Assicurati di avere **Python** e **Docker** installati. Poi, installa le dipendenze:

```sh
pip install -r requirements.txt

```

### 2️⃣ **Avviare il Progetto con Docker**

Esegui il seguente comando per avviare i container:

```sh
docker-compose -f demo-compose.yml up --build

```

### 3️⃣ **Accesso all'Applicazione**

Dopo l'avvio, l'applicazione sarà disponibile all'indirizzo:

```
http://localhost:5000

```

----------

📌 **Nota:** Per ulteriori dettagli, consulta il file **`README.md`**.

----------
## Struttura codice

Il file `base.js`, situato nella cartella `js/base`, è responsabile della gestione della localizzazione (i18n - internazionalizzazione) dell'applicazione. Utilizza la libreria **Polyglot** per tradurre il contenuto dell'interfaccia utente in base alla lingua selezionata.
1. **Importazione delle Dipendenze**:
   - Viene importato il file `style.css` per applicare gli stili CSS.
   - Viene importata la libreria **Polyglot**, che gestisce le traduzioni.

2. **Configurazione della Localizzazione**:
   - Verifica che l'oggetto `window.warpGlobals.i18n` sia definito e contenga le informazioni necessarie (`locale` e `phrases`).
   - Se mancano `locale` o `phrases`, viene generato un errore.
   - Inizializza un'istanza di Polyglot con le impostazioni di localizzazione.

3. **Funzioni di Traduzione**:
Aggiornano il contenuto del DOM con le traduzioni corrette. Cerca elementi con la classe `TR` e sostituisce il loro contenuto con la traduzione corrispondente.
Scrive direttamente nel documento il testo tradotto.

4. **Evento `DOMContentLoaded`**:
   - Quando il DOM è completamente caricato, viene chiamata la funzione `window.TR.updateDOM` per applicare le traduzioni a tutti gli elementi rilevanti.

---

### Perché è importante?
- **Internazionalizzazione**: Permette all'applicazione di supportare più lingue, migliorando l'accessibilità per utenti di diverse regioni.
- **Dinamicità**: Le traduzioni vengono applicate automaticamente al caricamento della pagina, senza bisogno di ricaricare il contenuto.
- **Manutenibilità**: L'uso di Polyglot e di un approccio strutturato semplifica l'aggiunta di nuove lingue o la modifica delle traduzioni esistenti.

---
`node_modules` : contiene tutte le dipendenze installate

---
### 1.  **`bookings.js`**

-   **Scopo**: Gestisce la visualizzazione e la gestione delle prenotazioni (bookings) effettuate dagli utenti.
    
-   **Funzionalità principali**:
    
    -   Utilizza  **Tabulator**  per creare una tabella dinamica che visualizza le prenotazioni.
        
    -   Supporta la filtrazione e l'ordinamento delle prenotazioni in base a diversi criteri (ad esempio, nome utente, zona, postazione, data).
        
    -   Permette l'esportazione dei dati delle prenotazioni in formato Excel.
        
    -   Gestisce la cancellazione delle prenotazioni con una conferma modale.
        
    -   Utilizza  **Materialize**  per la gestione dei date picker e dei modali.
        

----------

### 2.  **`groupAssign.js`**

-   **Scopo**: Gestisce l'assegnazione degli utenti ai gruppi.
    
-   **Funzionalità principali**:
    
    -   Utilizza  **Tabulator**  per visualizzare i membri di un gruppo.
        
    -   Permette di aggiungere o rimuovere utenti da un gruppo.
        
    -   Supporta la ricerca e l'autocompletamento degli utenti da aggiungere al gruppo.
        
    -   Utilizza  **Materialize**  per la gestione dei modali e degli input di autocompletamento.
        

----------

### 3.  **`groups.js`**

-   **Scopo**: Gestisce la creazione, modifica e cancellazione dei gruppi.
    
-   **Funzionalità principali**:
    
    -   Utilizza  **Tabulator**  per visualizzare l'elenco dei gruppi.
        
    -   Permette di aggiungere, modificare o eliminare gruppi.
        
    -   Supporta la navigazione alla pagina di assegnazione degli utenti a un gruppo.
        
    -   Utilizza  **Materialize**  per la gestione dei modali e dei form di modifica.
        

----------

### 4.  **`users.js`**

-   **Scopo**: Gestisce la creazione, modifica e cancellazione degli utenti.
    
-   **Funzionalità principali**:
    
    -   Utilizza  **Tabulator**  per visualizzare l'elenco degli utenti.
        
    -   Permette di aggiungere, modificare o eliminare utenti.
        
    -   Supporta l'assegnazione degli utenti a gruppi.
        
    -   Gestisce la generazione di password casuali per gli utenti.
        
    -   Utilizza  **Materialize**  per la gestione dei modali, dei form di modifica e degli input di autocompletamento.
        

----------

### 5.  **`zone.js`**

-   **Scopo**: Gestisce la visualizzazione e la prenotazione delle postazioni in una zona specifica.
    
-   **Funzionalità principali**:
    
    -   Visualizza una mappa delle postazioni con la possibilità di prenotare, modificare o cancellare prenotazioni.
        
    -   Utilizza  **noUiSlider**  per la selezione degli orari di prenotazione.
        
    -   Gestisce la visualizzazione delle informazioni sulle postazioni (ad esempio, assegnazioni e prenotazioni esistenti).
        
    -   Supporta la modifica delle assegnazioni delle postazioni (ad esempio, assegnare una postazione a un utente specifico).
        
    -   Utilizza  **Materialize**  per la gestione dei modali e delle interazioni utente.
        

----------

### 6.  **`zoneAssign.js`**

-   **Scopo**: Gestisce l'assegnazione degli utenti e dei gruppi a una zona specifica.
    
-   **Funzionalità principali**:
    
    -   Utilizza  **Tabulator**  per visualizzare gli utenti e i gruppi assegnati a una zona.
        
    -   Permette di aggiungere o rimuovere utenti/gruppi da una zona.
        
    -   Supporta la modifica dei ruoli degli utenti/gruppi all'interno della zona (ad esempio, amministratore, utente, visualizzatore).
        
    -   Utilizza  **Materialize**  per la gestione dei modali e degli input di autocompletamento.
----------
### **7. `zoneModify.js`**

**Scopo:**  
Gestisce la modifica di una mappa associata a una zona, consentendo il caricamento di immagini e l'aggiunta di "posti" sulla mappa.

### **Principali funzionalità:**

1.  **Import di moduli**
    
    -   `Utils`: per operazioni AJAX.
    -   `WarpModal`: per conferme modali.
    -   `SeatFactory`: per la gestione dei posti nella mappa.
2.  **Caricamento e gestione dell'immagine della mappa**
    
    -   Un pulsante (`chooseImgBtn`) permette di selezionare un'immagine come sfondo della mappa.
    -   L'input `mapUploadInput` aggiorna la mappa al cambio di file.
3.  **Aggiunta di posti sulla mappa**
    
    -   Un pulsante `addSeatBtn` attiva/disattiva la modalità di aggiunta.
    -   Quando attivata, un click sulla mappa aggiunge un posto.
4.  **Modifica di un posto**
    
    -   Quando si seleziona un posto, si apre un pannello (`seat_edit_panel`) per modificarne nome e coordinate.
    -   È possibile eliminare/ripristinare un posto con `seat_delete_btn`.
5.  **Salvataggio delle modifiche**
    
    -   Il bottone `saveBtn` salva:
        -   Nuova immagine della mappa.
        -   Modifiche ai posti (aggiunti, spostati, eliminati).
    -   Una finestra modale (`WarpModal`) chiede conferma prima di procedere.
6.  **Gestione eventi UI**
    
    -   Prevenzione della chiusura della pagina con modifiche non salvate (`beforeunload`).
    -   Pulsante `cancelBtn` per annullare le modifiche e tornare alla pagina precedente.

----------
### **8. `zones.js`**

**Scopo:**  
Gestisce una tabella interattiva che visualizza e modifica le zone, permettendo l'assegnazione di utenti e la modifica delle mappe.

### **Principali funzionalità:**

1.  **Import di moduli**
    
    -   `Utils`: probabilmente per funzioni di utilità (es. richieste HTTP).
    -   `WarpModal`: per la gestione delle finestre modali.
    -   `Tabulator`: per la creazione della tabella delle zone.
2.  **Icon Formatter**
    
    -   Funzione che genera icone nei pulsanti della tabella.
3.  **Gestione della finestra di modifica delle zone**
    
    -   La funzione `showEditDialog(id, name, zoneGroup)` apre un **modale** per modificare o eliminare una zona.
    -   Se si salva, invia una richiesta HTTP a `zonesAddOrEdit`.
    -   Se si elimina, chiede conferma e invia la richiesta a `zonesDelete`.
4.  **Creazione della tabella con Tabulator**
    
    -   La tabella carica i dati da `zonesList` via AJAX.
    -   Le colonne includono:
        -   Pulsanti per la gestione utenti, modifica zona, modifica mappa.
        -   Nome zona, gruppo, numero di utenti e amministratori.
    -   Supporta filtri, ordinamenti e paginazione remota.
5.  **Eventi e interazione con la UI**
    
    -   Bottone per aggiungere nuove zone (`add_zone_btn`).
    -   Quando si clicca un'icona di modifica, apre il modale con i dettagli della zona selezionata.

----------
### Panoramica generale:

-   **bookings.js**,  **groupAssign.js**,  **groups.js**,  **users.js**,  **zone.js**,  **zoneAssign.js**, **zoneModify.js** e **zones.js** sono file che gestiscono diverse funzionalità dell'applicazione, tra cui la gestione delle prenotazioni, degli utenti, dei gruppi e delle postazioni.
    
-   **Tabulator**  è utilizzato in quasi tutti i file per visualizzare dati tabellari in modo dinamico, con funzionalità di filtro, ordinamento e paginazione.
    
-   **Materialize**  è utilizzato per la gestione dei modali, dei form, degli input di autocompletamento e delle interazioni utente.
    
-   **noUiSlider**  è utilizzato in  **zone.js**  per la selezione degli orari di prenotazione.
    
-   I file sono progettati per essere interattivi e reattivi, con un forte utilizzo di JavaScript per gestire le richieste AJAX e aggiornare dinamicamente l'interfaccia utente.

----------

### Funzionamento comune:

-   **Interazione con il backend**: Tutti i file utilizzano  **Utils.xhr**  per effettuare richieste HTTP (GET e POST) al backend, gestendo il caricamento dei dati e l'invio di modifiche.
    
-   **Gestione degli eventi**: Vengono utilizzati listener per gestire le interazioni dell'utente, come clic su pulsanti, selezione di date, o modifica di campi.
    
-   **Modali**:  **WarpModal**  è utilizzato per visualizzare messaggi di conferma, form di modifica e altre finestre di dialogo.
    
-   **Internazionalizzazione**: Viene utilizzata la funzione  **TR**  per gestire le traduzioni dei testi nell'interfaccia utente.
- 
Questi file lavorano insieme per fornire un'esperienza utente fluida e interattiva, consentendo agli utenti di gestire prenotazioni, utenti, gruppi e postazioni in modo efficiente. L'uso di librerie come **Tabulator**, **Materialize** e **noUiSlider** semplifica lo sviluppo di funzionalità complesse, mantenendo un'interfaccia utente moderna e reattiva.

---
Nella cartella `views/modules` si trovano gli scripts, per la gestione del sistema di prenotazione.

Il file `bookas.js` gestisce la funzionalità di prenotazione "come" un altro utente (ad esempio, un amministratore che prenota per un dipendente).
-   Implementa un pattern  **Singleton**  per garantire una sola istanza di  `BookAs`.
    
-   Gestisce la selezione dell'utente per cui si sta effettuando la prenotazione.
    
-   Fornisce funzionalità di autocompletamento per la selezione degli utenti.
    
-   Aggiorna l'interfaccia utente in base alla selezione dell'utente.
    
Il file `modal.js` gestisce la creazione e la visualizzazione di modali (finestre di dialogo) nell'applicazione
-   Crea modali dinamici con contenuti personalizzabili.
    
-   Supporta l'aggiunta di pulsanti e la gestione degli eventi associati (ad esempio, clic su "OK" o "Annulla").
    
-   Utilizza il framework  **Materialize**  per la gestione dei modali.

Il file `seat.js` gestisce la visualizzazione e l'interazione con le postazioni nell'applicazione.
-   Rappresenta una postazione con proprietà come posizione (`x`,  `y`), stato (disponibile, prenotata, disabilitata, ecc.) e assegnazioni.
    
-   Gestisce la visualizzazione delle postazioni su una mappa, inclusa la gestione degli sprite (immagini) per rappresentare diversi stati.
    
-   Fornisce funzionalità per aggiornare lo stato delle postazioni in base alle prenotazioni e alle assegnazioni.

Il file `utils.js` fornisce funzioni di utilità generiche utilizzate in tutta l'applicazione.
-   Gestisce le richieste HTTP (GET e POST) tramite  `XMLHttpRequest`.
    
-   Fornisce funzioni per la formattazione degli errori e la gestione delle traduzioni.
    
-   Implementa un sistema di gestione degli eventi (`Listeners`) per gestire callback asincroni.

Il file `zoneModify_seat.js` gestisce la modifica delle postazioni in una zona specifica, consentendo l'aggiunta, la rimozione e lo spostamento delle postazioni.
-   Permette di creare nuove postazioni, eliminarle o modificarne la posizione.
    
-   Supporta la trasformazione (traslazione) di gruppi di postazioni.
    
-   Gestisce l'interazione dell'utente con le postazioni (ad esempio, trascinamento per spostarle).

Il file `zoneuserdata.js` gestisce i dati degli utenti relativi alle zone e alle postazioni.
-   Carica i dati degli utenti da un endpoint API.
    
-   Fornisce funzioni per formattare e gestire i nomi degli utenti (ad esempio, "Nome [login]").
    
-   Implementa un pattern  **Singleton**  per garantire che i dati degli utenti siano caricati una sola volta e condivisi tra i vari componenti dell'applicazione.

### Panoramica generale:

-   **bookas.js**  e  **seat.js**  sono strettamente legati alla gestione delle prenotazioni e delle postazioni.
    
-   **modal.js**  e  **utils.js**  forniscono funzionalità di utilità generale, come la gestione dei modali e delle richieste HTTP.
    
-   **zoneModify_seat.js**  è specifico per la modifica delle postazioni in una zona, consentendo operazioni avanzate come lo spostamento e la trasformazione.
    
-   **zoneuserdata.js**  gestisce i dati degli utenti, essenziali per l'autenticazione e l'assegnazione delle postazioni.
---

Il file `webpack.config.js` è la configurazione di **Webpack**, un bundler utilizzato per ottimizzare e gestire il codice JavaScript, CSS e altre risorse.  
Questa configurazione è progettata per un ambiente di **produzione**, includendo ottimizzazioni per performance e gestione degli assets.

### **Funzionalità principali**

1.  **Importazione di moduli**
    
    -   `path`: per la gestione dei percorsi dei file.
    -   `fs/promises`: per operazioni asincrone sui file.
    -   `TerserPlugin`: per minimizzare il codice JavaScript.
    -   `HtmlWebpackPlugin`: per generare file HTML dinamicamente.
    -   `MiniCssExtractPlugin`: per estrarre i CSS in file separati.
2.  **Definizione delle cartelle principali**
    
    -   `warpDir`: directory base del progetto.
    -   `outputDir`: cartella di destinazione per i file bundle (`static/dist`).
    -   `htmlOutputDir`: directory per i file HTML generati (`templates/headers`).

----------

### **Processo di configurazione**

### **1. Pulizia delle cartelle di output**

-   La funzione `removeFiles(dir)` rimuove tutti i file presenti nelle cartelle `outputDir` e `htmlOutputDir`.
-   Questo evita conflitti con file vecchi senza usare `clean: true` (poiché più entry puntano alla stessa directory).

----------

### **2. Creazione dinamica degli HTML con `HtmlWebpackPlugin`**

-   La funzione `createHtmlWebpackPlugin(chunkName)` genera file HTML contenenti solo i tag `<head>`, che probabilmente vengono inclusi altrove nel progetto.
-   Questo garantisce che ogni entry JavaScript abbia un HTML corrispondente.

----------

### **3. Configurazione Webpack**

La configurazione viene restituita come un **array** di due oggetti:

#### **a) Primo oggetto - Configurazione principale**

-   **`entry: {}`** → vuoto, sarà riempito dinamicamente.
-   **`mode: 'production'`** → ottimizzazioni attive.
-   **`output`**:
    -   `path: outputDir` → destinazione dei file JavaScript.
    -   `filename: '[name].[contenthash].js'` → nome con hash per caching.
-   **`performance`** → imposta limiti per la dimensione dei file (400KB).
-   **`optimization`**:
    -   Usa `TerserPlugin` per minimizzare il codice.
    -   Abilita `splitChunks` per dividere il codice in parti riutilizzabili.
-   **`module.rules`**:
    -   Gestisce file **SCSS e CSS** con:
        -   `MiniCssExtractPlugin.loader` → Estrae i CSS in file separati.
        -   `css-loader` → Permette di importare CSS nei file JS.
        -   `postcss-loader` (con `cssnano`) → Ottimizza i CSS.
        -   `sass-loader` → Compila SCSS/SASS in CSS.
-   **`plugins`**:
    -   `MiniCssExtractPlugin` → salva i CSS con nome `[name].[contenthash].css`.

----------

#### **b) Secondo oggetto - Gestione di `base.js`**

-   **`entry`** → Definita manualmente per `base.js`.
-   **`output`** → Stessa struttura della prima configurazione.
-   **`module.rules`** → Uguale alla prima configurazione.
-   **`plugins`**:
    -   `MiniCssExtractPlugin`
    -   `createHtmlWebpackPlugin('base')` → Genera `base.html`.

----------

### **4. Completamento automatico della configurazione**

-   **`fillConfig(config, 'views')`**:
    -   Scansiona la cartella `views/` alla ricerca di file `.js`.
    -   Aggiunge ogni file trovato come entry in Webpack.
    -   Per ogni file `.js` trovato, viene generato un file HTML corrispondente.

----------

### **Riassunto**

-   **Webpack bundle** JavaScript e CSS per produzione.
-   **Pulisce** le cartelle di output prima di ogni build.
-   **Minimizza** il codice con `TerserPlugin` e `cssnano`.
-   **Supporta SCSS/SASS** e li compila in file CSS separati.
-   **Genera dinamicamente file HTML** per ogni entry JavaScript in `views/`.

----------
Nella cartella `warp/xhr` troviamo diversi file python. Questi file definiscono le  **API**  (endpoint) che gestiscono le richieste HTTP provenienti dal frontend (JavaScript) e interagiscono con il database per eseguire operazioni come la gestione delle prenotazioni, degli utenti, dei gruppi e delle zone. Di seguito è riportata una panoramica del loro scopo e funzionamento:

----------

### 1.  **`zones.py`**

-   **Scopo**: Gestisce le operazioni relative alle zone (ad esempio, creazione, modifica, eliminazione di zone) e alle postazioni (seats) all'interno di una zona.
    
-   **Funzionalità principali**:
    
    -   **Lista delle zone**: Restituisce l'elenco delle zone con informazioni dettagliate (ad esempio, numero di amministratori, utenti e visualizzatori).
        
    -   **Eliminazione di una zona**: Permette di eliminare una zona specifica.
        
    -   **Aggiunta o modifica di una zona**: Gestisce la creazione o l'aggiornamento di una zona.
        
    -   **Gestione delle postazioni**: Permette di aggiungere, modificare o rimuovere postazioni all'interno di una zona.
        
    -   **Assegnazione di utenti/gruppi a una zona**: Gestisce l'assegnazione di ruoli (ad esempio, amministratore, utente, visualizzatore) agli utenti o ai gruppi all'interno di una zona.
        

----------

### 2.  **`init.py`**

-   **Scopo**: Questo file inizializza il modulo  `xhr`  e registra tutti i blueprint (sotto-moduli) che definiscono gli endpoint API.
    
-   **Funzionalità principali**:
    
    -   Registra i blueprint per le seguenti funzionalità:
        
        -   **bookings**: Gestione delle prenotazioni.
            
        -   **zone**: Gestione delle zone e delle postazioni.
            
        -   **users**: Gestione degli utenti.
            
        -   **groups**: Gestione dei gruppi.
            
        -   **zones**: Gestione delle zone (simile a  `zone.py`, ma con funzionalità aggiuntive).
            

----------

### 3.  **`bookings.py`**

-   **Scopo**: Gestisce le operazioni relative alle prenotazioni (bookings) delle postazioni.
    
-   **Funzionalità principali**:
    
    -   **Report delle prenotazioni**: Restituisce un elenco di prenotazioni con filtri e ordinamenti personalizzabili.
        
    -   **Esportazione in Excel**: Permette di esportare i dati delle prenotazioni in formato Excel.
        
    -   **Gestione delle prenotazioni**: Supporta la visualizzazione, la creazione e la cancellazione delle prenotazioni.
        

----------

### 4.  **`groups.py`**

-   **Scopo**: Gestisce le operazioni relative ai gruppi di utenti.
    
-   **Funzionalità principali**:
    
    -   **Lista dei membri di un gruppo**: Restituisce l'elenco degli utenti appartenenti a un gruppo specifico.
        
    -   **Assegnazione di utenti a un gruppo**: Permette di aggiungere o rimuovere utenti da un gruppo.
        

----------

### 5.  **`users.py`**

-   **Scopo**: Gestisce le operazioni relative agli utenti.
    
-   **Funzionalità principali**:
    
    -   **Lista degli utenti**: Restituisce l'elenco degli utenti con informazioni dettagliate (ad esempio, nome, tipo di account).
        
    -   **Aggiunta o modifica di un utente**: Permette di creare o aggiornare un utente, inclusa la gestione delle password e dei gruppi a cui appartiene.
        
    -   **Eliminazione di un utente**: Permette di eliminare un utente, con controlli per evitare la cancellazione di utenti con prenotazioni attive.
        

----------

### 6.  **`zone.py`**

-   **Scopo**: Gestisce le operazioni relative alle zone e alle postazioni, con un focus sulle prenotazioni e sulle assegnazioni.
    
-   **Funzionalità principali**:
    
    -   **Recupero delle postazioni**: Restituisce le informazioni sulle postazioni di una zona, inclusi i dettagli delle prenotazioni e delle assegnazioni.
        
    -   **Applicazione delle modifiche**: Gestisce le operazioni di abilitazione/disabilitazione delle postazioni, assegnazione di utenti a postazioni, creazione di prenotazioni e cancellazione di prenotazioni.
        
    -   **Controllo dei conflitti**: Verifica la presenza di conflitti (ad esempio, prenotazioni sovrapposte) quando si applicano modifiche.
        

----------

### Panoramica generale:

-   **Flask**: Tutti i file utilizzano  **Flask**  per definire endpoint API che rispondono a richieste HTTP (GET, POST, ecc.).
    
-   **Database**: Interagiscono con un database utilizzando  **Peewee**, un ORM (Object-Relational Mapping) per Python, per eseguire query e gestire i dati.
    
-   **Validazione degli input**: Utilizzano  **JSON Schema**  per validare i dati in ingresso e garantire che siano corretti e completi.
    
-   **Gestione degli errori**: Implementano controlli di sicurezza e gestione degli errori per garantire che solo gli utenti autorizzati possano eseguire determinate operazioni.
    

----------

### Funzionamento comune:

1.  **Ricezione delle richieste**: Ogni endpoint riceve una richiesta HTTP (ad esempio, una richiesta POST con dati JSON).
    
2.  **Validazione dei dati**: I dati in ingresso vengono validati utilizzando  **JSON Schema**  per garantire che siano corretti.
    
3.  **Interazione con il database**: Vengono eseguite query sul database utilizzando  **Peewee**  per recuperare, aggiornare o eliminare dati.
    
4.  **Risposta al client**: I risultati delle operazioni vengono restituiti al client in formato JSON.

----------
Nella cartella principale del progetto (fuori dalla cartella  `xhr`), troviamo altri file python che svolgono ruoli fondamentali per il funzionamento dell'applicazione web. Di seguito è riportata una panoramica del loro scopo e funzionamento:

----------

### 1.  **`init.py`**

-   **Scopo**: Questo file è il punto di ingresso principale per l'applicazione Flask. Si occupa di configurare e inizializzare l'applicazione, registrando i blueprint (moduli) e i componenti necessari.
    
-   **Funzionalità principali**:
    
    -   **Creazione dell'app Flask**: Inizializza l'applicazione Flask e configura le impostazioni.
        
    -   **Inizializzazione del database**: Collega l'applicazione al database utilizzando il modulo  `db`.
        
    -   **Registrazione dei blueprint**: Registra i blueprint per le viste (`view`), le API (`xhr`) e l'autenticazione (`auth`,  `auth_mellon`,  `auth_ldap`).
        
    -   **Gestione dell'autenticazione**: Sceglie il metodo di autenticazione (ad esempio, Mellon o LDAP) in base alla configurazione dell'applicazione.
        

----------

### 2.  **`auth_ldap.py`**

Questo file implementa l'autenticazione tramite  **LDAP**  (Lightweight Directory Access Protocol), un protocollo utilizzato per accedere e gestire informazioni di directory su una rete.

1.  **Connessione LDAP**:
    
    -   La funzione  `ldapConnect`  gestisce la connessione al server LDAP, configurando i parametri di sicurezza come TLS e certificati.
        
    -   Se la connessione è stabilita con successo, l'utente può autenticarsi utilizzando le credenziali fornite.
        
2.  **Recupero Metadati Utente**:
    
    -   La funzione  `ldapGetUserMetadata`  recupera le informazioni dell'utente dal server LDAP, come il nome e i gruppi a cui appartiene.
        
    -   Queste informazioni vengono poi mappate ai gruppi definiti nell'applicazione.
        
3.  **Applicazione Metadati Utente**:
    
    -   La funzione  `ldapApplyUserMetadata`  aggiorna il database dell'applicazione con le informazioni dell'utente, creando o aggiornando il profilo dell'utente e i gruppi associati.
        
4.  **Login**:
    
    -   La funzione  `ldapLogin`  gestisce il processo di login, verificando le credenziali tramite LDAP e aggiornando la sessione dell'utente se l'autenticazione ha successo.
        
    -   La route  `/login`  gestisce le richieste di login, sia GET che POST, e reindirizza l'utente alla pagina principale dopo un login riuscito.
        
5.  **Logout**:
    
    -   La route  `/logout`  gestisce il logout dell'utente, cancellando la sessione corrente.
        
----------
### 3.  **`auth_mellon.py`**


Questo file implementa l'autenticazione tramite  **SAML**  utilizzando  **Mellon**, un modulo Apache per l'autenticazione SAML.

1.  **Login**:
    
    -   La route  `/login`  gestisce il processo di autenticazione SAML. Se l'utente è già autenticato, la sessione viene cancellata e l'utente viene reindirizzato al provider SAML per una nuova autenticazione.
        
    -   Se l'autenticazione ha successo, le informazioni dell'utente (come l'ID e il nome) vengono recuperate dall'ambiente della richiesta e utilizzate per creare o aggiornare il profilo dell'utente nel database.
        
    -   L'utente viene quindi reindirizzato alla pagina principale.
        
2.  **Logout**:
    
    -   La route  `/logout`  gestisce il logout dell'utente, cancellando la sessione e reindirizzando l'utente al provider SAML per il logout.
        

#### Funzionalità Comuni

-   **Gestione Sessioni**: Entrambi i file utilizzano le sessioni di Flask per mantenere lo stato dell'utente autenticato. La sessione viene cancellata durante il logout e aggiornata durante il login.
    
-   **Integrazione con il Database**: Entrambi i file interagiscono con un database per memorizzare o aggiornare le informazioni degli utenti, come nome, gruppi e tipo di account.
    
-   **Configurazione**: Le configurazioni specifiche per LDAP e SAML (come URL del server, certificati, gruppi predefiniti, ecc.) sono gestite tramite le configurazioni dell'applicazione Flask.
        
----------
### 4.  **`auth.py`**

-   **Scopo**: Gestisce l'autenticazione degli utenti, inclusi il login, il logout e la gestione delle sessioni.
    
-   **Funzionalità principali**:
    
    -   **Login**: Gestisce il processo di login, verificando le credenziali degli utenti (nome utente e password) e creando una sessione valida.
        
    -   **Logout**: Gestisce il processo di logout, cancellando la sessione dell'utente.
        
    -   **Gestione delle sessioni**: Verifica la validità della sessione dell'utente prima di consentire l'accesso alle altre parti dell'applicazione. Se la sessione non è valida, reindirizza l'utente alla pagina di login.
        
    -   **Controllo dei permessi**: Verifica se l'utente è un amministratore e imposta una variabile globale (`flask.g.isAdmin`) per gestire i permessi.

### Panoramica generale:
    
-   **Autenticazione**: Il file  `auth.py`  è responsabile della gestione dell'autenticazione degli utenti, garantendo che solo gli utenti autorizzati possano accedere alle funzionalità dell'applicazione.
    
-   **Configurazione**: Il file  `__init__.py`  configura l'applicazione Flask, registra i blueprint e gestisce l'inizializzazione del database e dei componenti di autenticazione.
----------
### **5. `blob_storage.py`**
Questo file gestisce l'archiviazione e la gestione di **BLOB** (Binary Large Objects) in un database. Le funzioni principali includono:
- **`deleteBlob`**: Elimina uno o più BLOB dal database in base all'ID.
- **`addOrUpdateBlob`**: Aggiunge o aggiorna un BLOB nel database, gestendo anche l'aggiornamento dell'ETag per il controllo della concorrenza.
- **`createBlobResponse`**: Crea una risposta HTTP per restituire un BLOB, gestendo la validazione dell'ETag per il caching condizionale.

---

### **6. `config.py`**
Questo file gestisce la configurazione dell'applicazione Flask, con impostazioni predefinite per ambienti di sviluppo e produzione. Le principali caratteristiche sono:
- **`DefaultSettings`**: Definisce le impostazioni predefinite, come il tempo di vita della sessione, le configurazioni LDAP e i limiti di dimensione per i file caricati.
- **`DevelopmentSettings`**: Estende le impostazioni predefinite per l'ambiente di sviluppo, inclusi i dettagli del database e la chiave segreta.
- **`ProductionSettings`**: Configurazioni per l'ambiente di produzione, con la possibilità di sovrascrivere le impostazioni tramite variabili d'ambiente.
- **`readEnvironmentSettings`**: Legge le variabili d'ambiente con prefisso `WARP_` e le aggiunge alla configurazione dell'app.

---

### **7. `db.py`**
Questo file gestisce la connessione al database e l'inizializzazione delle tabelle. Le funzionalità principali includono:
- **Definizione delle tabelle**: Vengono definite le tabelle del database (ad esempio, `Blobs`, `Users`, `Groups`, `Seat`, ecc.) utilizzando il framework Peewee.
- **Inizializzazione del database**: La funzione `initDB` esegue script SQL per inizializzare il database, con supporto per tentativi di riconnessione in caso di errori.
- **Gestione delle connessioni**: Le connessioni al database vengono gestite automaticamente prima e dopo ogni richiesta HTTP.

---

### **8. `utils.py`**
Questo file contiene funzioni di utilità per la gestione del tempo, la validazione degli input JSON e la formattazione delle date. Le funzioni principali includono:
- **Gestione del tempo**: Funzioni come `now`, `today`, `getTimeRange` e `getNextWeek` aiutano a gestire timestamp e intervalli di tempo.
- **Validazione JSON**: La funzione `validateJSONInput` valida gli input JSON in base a uno schema specifico e verifica i permessi dell'utente.
- **Formattazione delle date**: Funzioni come `formatTimestamp` e `formatTimespan` formattano i timestamp in stringhe leggibili.

---

### **9. `notifiche.py`**
Questo file gestisce l'invio di notifiche email tramite SMTP. La funzione principale è:
- **`send_occupazione_email`**: Invia un'email di notifica quando una scrivania viene occupata. Utilizza il server SMTP di Gmail e gestisce gli errori comuni come problemi di autenticazione o connessione.

---

### Panoramica generale
Questi file lavorano insieme per fornire funzionalità di autenticazione (LDAP o SAML), gestione del database, configurazione flessibile e notifiche via email. La struttura modulare e l'uso di configurazioni basate su ambiente rendono il sistema adattabile a diversi scenari di deployment.

---

### **10. `utils.py`**
Questo file contiene funzioni di utilità per la gestione del tempo, la formattazione delle date e la validazione degli input JSON. Le funzioni principali includono:
- **Gestione del tempo**: Funzioni come `now`, `today`, `getTimeRange` e `getNextWeek` aiutano a gestire timestamp e intervalli di tempo, utili per la prenotazione di risorse (ad esempio, scrivanie).
- **Formattazione delle date**: Funzioni come `formatTimestamp` e `formatTimespan` formattano i timestamp in stringhe leggibili.
- **Validazione JSON**: La funzione `validateJSONInput` valida gli input JSON in base a uno schema specifico e verifica i permessi dell'utente (ad esempio, se è un amministratore).

---

### **11. `utils_tabulator.py`**
Questo file gestisce l'interazione con **Tabulator**, una libreria JavaScript per la visualizzazione di tabelle interattive. Le funzionalità principali includono:
- **Schema Tabulator**: Definisce uno schema JSON per validare le richieste di paginazione, ordinamento e filtraggio delle tabelle.
- **Applicazione delle richieste Tabulator**: La funzione `applyTabulatorToQuery` applica filtri, ordinamento e paginazione a una query del database, restituendo i risultati formattati per Tabulator.
- **Estensione dello schema**: La funzione `addToTabulatorSchema` permette di estendere lo schema Tabulator con proprietà personalizzate.

---

### **12. `view.py`**
Questo file definisce le route e la logica di visualizzazione dell'applicazione Flask. Le principali funzionalità includono:
- **Gestione delle viste**: Le route come `/bookings`, `/zone`, `/users`, `/groups`, e `/zones` gestiscono la visualizzazione di prenotazioni, zone, utenti, gruppi e altre risorse.
- **Controllo degli accessi**: Le route verificano i permessi dell'utente (ad esempio, se è un amministratore) prima di restituire i dati.
- **Header dinamico**: La funzione `headerDataInit` genera un header dinamico per la navigazione, mostrando solo le risorse accessibili all'utente.
- **Interazione con il database**: Le route interagiscono con il database per recuperare dati come prenotazioni, informazioni sulle zone e immagini associate.

---

### Panoramica generale
Questi file lavorano insieme per fornire funzionalità di gestione del tempo, validazione degli input, visualizzazione di dati tabellari e controllo degli accessi. La struttura modulare e l'uso di strumenti come Tabulator rendono il sistema flessibile e adattabile a diverse esigenze di visualizzazione e interazione con i dati.


Per la conclusione, potresti scrivere qualcosa che riassuma l'importanza del progetto e ne evidenzi i benefici, ad esempio:

----------

## Conclusione

**SitUp** è stato progettato per semplificare e ottimizzare la gestione degli spazi di lavoro, offrendo agli utenti un sistema intuitivo per la prenotazione delle postazioni. Grazie all'uso di tecnologie moderne come **Flask, PostgreSQL e Docker**, il progetto garantisce scalabilità, sicurezza e facilità di utilizzo.

L'adozione di SitUp può migliorare l'organizzazione aziendale, ridurre i conflitti nella gestione degli spazi e fornire strumenti di analisi utili per una gestione più efficiente. Con un'architettura modulare e una solida integrazione con strumenti di autenticazione, SitUp è una soluzione flessibile e adattabile a diverse realtà aziendali.

Le future evoluzioni del progetto potrebbero includere un'integrazione più avanzata con sistemi di controllo accessi e funzionalità di analisi predittiva per ottimizzare ulteriormente l'uso degli spazi. SitUp rappresenta quindi un passo concreto verso un ambiente di lavoro più smart e organizzato.
