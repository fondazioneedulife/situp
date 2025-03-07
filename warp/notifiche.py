import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Sender and receiver information
sender_mail = 'andrea.canda88@gmail.com'
# It's recommended to use environment variables or a secure method to handle passwords
password = 'csri rkel zinr oggv'  # Ensure this is an App Password if using Gmail
receiver_mail = 'andrea.canda88@gmail.com'

# Email content
subject = 'ATTENZIONE: SCRIVANIA OCCUPATA'
message = ('Gentile dipendente,\n\n'
           'La informiamo che la sua prenotazione per la scrivania è stata '
           'cancellata a causa di una riunione all\'interno della vostra stanza.\n\n'
           'Cordiali saluti,\n'
           'Il Team')

def send_mail(sender_mail, password, receiver_mail, subject, message):
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587  # For TLS

    # Create a multipart message
    msg = MIMEMultipart()
    msg['From'] = sender_mail
    msg['To'] = receiver_mail
    msg['Subject'] = subject

    # Attach the message body
    msg.attach(MIMEText(message, 'plain'))

    try:
        # Connect to the Gmail SMTP server
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.ehlo()  # Can be omitted; sometimes needed
            server.starttls()  # Secure the connection
            server.ehlo()  # Re-identify after starting TLS

            # Log in to the server
            server.login(sender_mail, password)

            # Send the email
            server.sendmail(sender_mail, receiver_mail, msg.as_string())

        print("Email sent successfully!")
    except smtplib.SMTPAuthenticationError:
        print("Authentication failed. Check your email and password or App Password settings.")
    except smtplib.SMTPException as e:
        print(f"Error sending email: {e}")

# Call the send_mail function to send the email
send_mail(sender_mail, password, receiver_mail, subject, message)