const NodoDoble = require('./NodoDoble');

/**
 * Estructura de datos dinámica para la gestión de navegación bidireccional.
 */
class ListaDobleNavegacion {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.actual = null; // Puntero/Cursor de navegación activa
    this.longitud = 0;
  }

  /**
   * Inserta un nuevo registro al final de la lista. Complejidad: O(1)
   * @param {Object} dato - Registro a almacenar.
   * @returns {NodoDoble} El nodo creado.
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
   * Desplaza el cursor activo hacia el siguiente nodo. Complejidad: O(1)
   * @returns {Object|null} El dato del nuevo nodo activo o null si alcanza el final.
   */
  avanzar() {
    if (this.actual && this.actual.siguiente) {
      this.actual = this.actual.siguiente;
      return this.actual.dato;
    }
    return null;
  }

  retroceder() {
    if (this.actual && this.actual.anterior) {
      this.actual = this.actual.anterior;
      return this.actual.dato;
    }
    return null;
  }


  /**
   * Elimina el nodo donde está ubicado el cursor. Complejidad: O(1)
   * @returns {Object|null} El dato del nodo eliminado o null si la lista está vacía.
   */
  eliminarActual() {
    if (!this.actual) {
      return null;
    }

    const nodoEliminado = this.actual;
    const datoEliminado = nodoEliminado.dato;

    // Caso 1: El nodo tiene un anterior.
    if (nodoEliminado.anterior) {
      nodoEliminado.anterior.siguiente = nodoEliminado.siguiente;
    } else {
      this.cabeza = nodoEliminado.siguiente;
    }

    // Caso 2: El nodo tiene un siguiente.
    if (nodoEliminado.siguiente) {
      nodoEliminado.siguiente.anterior = nodoEliminado.anterior;
    } else {
      this.cola = nodoEliminado.anterior;
    }

    // Actualizar el cursor.
    this.actual = nodoEliminado.siguiente || nodoEliminado.anterior;

    // Desvincular el nodo eliminado.
    nodoEliminado.siguiente = null;
    nodoEliminado.anterior = null;

    this.longitud--;

    return datoEliminado;
  }
}

module.exports = ListaDobleNavegacion;

