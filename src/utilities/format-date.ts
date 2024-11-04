/**
 * Obtiene una representación formateada de una fecha en el formato especificado.
 * @param {string} date - La fecha en formato de cadena (ej. "2024-03-20").
 * @param {Intl.DateTimeFormatOptions} [options] - Opciones de formato de fecha y hora (opcional).
 * @returns {string} La fecha formateada según las opciones proporcionadas y el formato localizado 'es-MX'.
 */
export const getFormarDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  return new Intl.DateTimeFormat('es-MX', options).format(new Date(date))
}
