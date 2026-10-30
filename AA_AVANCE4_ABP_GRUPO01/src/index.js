const ListaDobleNavegacion = require('./models/ListaDobleNavegacion');

const lista = new ListaDobleNavegacion();
lista.insertar({ id: 1, accion: 'Inicio' });
lista.insertar({ id: 2, accion: 'Proceso' });

console.log('Elemento actual:', lista.obtenerActual());