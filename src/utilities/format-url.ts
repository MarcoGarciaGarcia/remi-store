/**
 * Formatea una URL convirtiendo la palabra a minúsculas y reemplazando espacios con guiones.
 * @param {string} url - La URL a ser formateada.
 * @returns {string} La URL formateada con todas las letras en minúsculas y espacios reemplazados por guiones.
 */
export function formatUrl(url: string): string {
	// Convertir la palabra a minúsculas y reemplazar espacios con guiones
	return removeAccents(url).toLowerCase().replace(/\s+/g, "-")
}

function removeAccents(palabra: string): string {
	return palabra.normalize("NFD").replace(/[\u0300-\u036F]/g, "")
}
