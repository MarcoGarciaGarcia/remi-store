import { LocalStorageEnum } from '@/enum'

/**
 * Proporciona funciones para interactuar con el almacenamiento local del navegador.
 * @returns {Object} Un objeto que contiene funciones para obtener y establecer elementos en el almacenamiento local.
 */
export const useLocalStore = () => {
  /**
   * Obtiene un elemento del almacenamiento local.
   * @param {LocalStorageEnum} key - La clave del elemento a obtener.
   * @returns {string | null} El valor del elemento o null si no se encuentra.
   */
  const getLocalStoreItem = (key: LocalStorageEnum): string | null => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      return item ?? null
    }
    return null
  }

  /**
   * Establece un elemento en el almacenamiento local.
   * @param {LocalStorageEnum} key - La clave del elemento a establecer.
   * @param {string} values - El valor del elemento a establecer.
   * @returns {void}
   */
  const setLocalStoreItem = (key: LocalStorageEnum, values: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, values)
    }
  }

  return { getLocalStoreItem, setLocalStoreItem }
}
