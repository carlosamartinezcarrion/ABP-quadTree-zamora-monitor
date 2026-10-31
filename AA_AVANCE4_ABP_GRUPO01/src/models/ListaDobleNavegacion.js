const NodoDoble = require('./NodoDoble');

/**
 * Estructura de datos dinámica para la gestión de navegación bidireccional.
 */
class ListaDobleNavegacion {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.actual = null;
    this.longitud = 0;
  }

  /**
   * Inserta un nuevo registro al final de la lista.
   * Complejidad temporal: O(1).
   */
  insertar(dato) {
    const nuevoNodo = new NodoDoble(dato);

    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
      this.actual = nuevoNodo;
    } else {
      this.cola.siguiente = nuevoNodo;
      nuevoNodo.anterior = this.cola;
      this.cola = nuevoNodo;
    }

    this.longitud++;
    return nuevoNodo;
  }

  /**
   * Desplaza el cursor activo hacia el siguiente nodo.
   * Complejidad temporal: O(1).
   */
  avanzar() {
    if (this.actual && this.actual.siguiente) {
      this.actual = this.actual.siguiente;
      return this.actual.dato;
    }

    return null;
  }

  /**
   * Retorna el elemento actualmente seleccionado por el cursor.
   */
  obtenerActual() {
    return this.actual ? this.actual.dato : null;
  }
}

module.exports = ListaDobleNavegacion;