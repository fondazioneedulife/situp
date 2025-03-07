import flask
from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from werkzeug.security import check_password_hash
from warp.db import Users, Groups, ACCOUNT_TYPE_ADMIN, ACCOUNT_TYPE_GROUP  # importa le tabelle e costanti dal tuo db.py
import smtplib
from email.mime.text import MIMEText

bp = Blueprint('notify', __name__)

def send_email_notification(recipient_email, subject, body):
    # Configurazione base per l'invio dell'email (meglio utilizzare variabili d'ambiente per dati sensibili)
    sender_email = "noreplyhwgsababa@gmail.com"
    password = "viez jxcb cpps gzhf"

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = recipient_email

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, recipient_email, msg.as_string())
        return True
    except Exception as e:
        print("Errore nell'invio dell'email:", e)
        return False

def notify_group():
    # Se il metodo è POST, invia la notifica
    if request.method == 'POST':
        login = request.form.get('login')
        if not login:
            flash("Login mancante")
            return redirect(url_for('notify.notify_group'))

        # Recupera tutti i gruppi associati all'utente (admin) che sta inviando la notifica
        admin_groups = Groups.select().where(Groups.login == login)
        if not admin_groups.exists():
            flash("Nessun gruppo associato all'utente")
            return redirect(url_for('notify.notify_group'))

        sent_emails = []
        # Per ciascun gruppo, recupera tutti gli utenti appartenenti
        for admin_group in admin_groups:
            group_value = admin_group.group

            # Esegue una join tra Users e Groups per ottenere gli utenti del gruppo
            query = (Users
                     .select(Users.login)
                     .join(Groups, on=(Users.login == Groups.login))
                     .where(Groups.group == group_value))
            
            for user in query:
                recipient_email = user.login  # Si assume che il campo 'login' contenga l'indirizzo email
                if send_email_notification(recipient_email, "Notifica di Gruppo", "Questa è una notifica per il tuo gruppo"):
                    sent_emails.append(recipient_email)
        
        flash("Notifica inviata a: " + ", ".join(sent_emails))
        return redirect(url_for('notify.notify_group'))

    # Se il metodo è GET, mostra il form di notifica
    return render_template("notify.html", login=session.get('login'))

# Registra la rotta sul blueprint, come nell'esempio di auth
bp.route('/notify', methods=['GET', 'POST'])(notify_group)
