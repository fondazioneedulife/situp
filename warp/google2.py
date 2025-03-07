import pyotp
import qrcode

# Segreto condiviso
secret = pyotp.random_base32()

# Crea un URI TOTP
uri = pyotp.totp.TOTP(secret).provisioning_uri(
    name="user@example.com",  # Account dell'utente
    issuer_name="My Web App"  # Nome della tua app
)

# Genera il QR Code
img = qrcode.make(uri)
img.save("qr_code.png")  # Salva il QR Code come immagine