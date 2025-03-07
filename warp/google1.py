import pyotp

# Genera un segreto casuale in formato base32
secret = pyotp.random_base32()

print("Segreto condiviso:", secret)