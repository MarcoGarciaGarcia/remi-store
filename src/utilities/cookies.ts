import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

// Almacena la key de .env
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY no está definida en .env')
}

export const encryptRole = (role: string): string => {
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY no está definida')
  }
  // Encripta la cookie con AES.encyrpt y lo convierte a cadena de texto
  return CryptoJS.AES.encrypt(role, SECRET_KEY).toString()
}

export const setRoleCookie = (role: string) => {
  // Crea la cookie con el rol encriptado
  const encryptedRole = encryptRole(role)
  Cookies.set('uerc', encryptedRole, {
    expires: 1, // Expira en 1 día
    secure: process.env.NODE_ENV === 'production', // Solo envía cookies a través de HTTPS en producción
    sameSite: 'Strict', // Evita que la cookie sea enviada en solicitudes de terceros
    path: '/' // La cookie es accesible en toda la aplicación
  })
}

export const decryptRole = (encryptedRole: string): string | null => {
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY no está definida')
  }
  const bytes = CryptoJS.AES.decrypt(encryptedRole, SECRET_KEY) // Desencripta la cookie con AES.decrypt
  const decryptedRole = bytes.toString(CryptoJS.enc.Utf8) // Convierte el resultado en una cadena de texto
  return decryptedRole || null
}
