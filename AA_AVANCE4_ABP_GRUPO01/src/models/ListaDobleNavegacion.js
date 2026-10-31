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

  /**
   * Desplaza el cursor activo hacia el nodo anterior.
   * Complejidad temporal: O(1).
   */
  retroceder() {
    if (this.actual && this.actual.anterior) {
      this.actual = this.actual.anterior;
      return this.actual.dato;
    }

    return null;
  }

  /**
   * Elimina el elemento en la posición actual y reconecta los enlaces.
   * Complejidad temporal: O(1).
   */
  eliminarActual() {
    if (!this.actual) return false;

    const nodoAEliminar = this.actual;

    // Reconectar el nodo anterior
    if (nodoAEliminar.anterior) {
      nodoAEliminar.anterior.siguiente = nodoAEliminar.siguiente;
    } else {
      this.cabeza = nodoAEliminar.siguiente;
    }

    // Reconectar el nodo siguiente
    if (nodoAEliminar.siguiente) {
      nodoAEliminar.siguiente.anterior = nodoAEliminar.anterior;
      this.actual = nodoAEliminar.siguiente;
    } else {
      this.cola = nodoAEliminar.anterior;
      this.actual = nodoAEliminar.anterior;
    }

    // Limpiar referencias del nodo eliminado
    nodoAEliminar.siguiente = null;
    nodoAEliminar.anterior = null;

    this.longitud--;

    return true;
  }

}

module.exports = ListaDobleNavegacion;