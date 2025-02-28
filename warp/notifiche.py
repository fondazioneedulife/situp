import smtplib
from email.message import EmailMessage

def send_occupazione_email():
    """Invia una notifica email quando una scrivania viene occupata."""

    # Configurazione SMTP
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    smtp_user = "andrea.canda88@gmail.com"
    smtp_pass = "csri rkel zinr oggv"  
    mail_sender = smtp_user
    mail_receiver = "andrea.canda88@gmail.com"

    # Creazione del messaggio email
    msg = EmailMessage()
    msg['Subject'] = "Notifica: Scrivania occupata"
    msg['From'] = mail_sender
    msg['To'] = mail_receiver
    msg.set_content("La tua scrivania è stata occupata.")

    # Invio email con gestione degli errori
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()  # Attiva la sicurezza TLS
            server.login(smtp_user, smtp_pass)  # Autenticazione SMTP
            server.send_message(msg)  # Invio email

        print(f"✅ Email inviata con successo a {mail_receiver}")

    except smtplib.SMTPAuthenticationError:
        print("❌ Errore di autenticazione: verifica username e password.")
    except smtplib.SMTPConnectError:
        print("❌ Errore di connessione al server SMTP.")
    except smtplib.SMTPException as e:
        print(f"❌ Errore SMTP: {e}")

# Esegui l'invio email
send_occupazione_email()