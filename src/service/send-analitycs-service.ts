interface ISendAnalitycsProsp {
  event: string
  value: string
}

/**
 * Envía eventos de análisis a Google Analytics y Google Tag Manager.
 *
 * @param {Object} analyticsProps - Propiedades para el envío de eventos de análisis.
 * @param {string} analyticsProps.event - El nombre del evento.
 * @param {string} analyticsProps.value - El valor asociado al evento.
 *
 * @returns {void} No devuelve un valor explícito.
 *
 */
export const sendAnalitycs = ({}: ISendAnalitycsProsp): void => {
}
