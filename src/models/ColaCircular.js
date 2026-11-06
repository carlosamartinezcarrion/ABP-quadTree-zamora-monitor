class ColaCircular {
  constructor(capacidad) {
    this.datos = new Array(capacidad);
    this.inicio = 0;
    this.cantidad = 0;
  }

  encolar(resena) {
    const n = this.datos.length;
    this.datos[(this.inicio + this.cantidad) % n] = resena;
    if (this.cantidad < n) this.cantidad++;
    else this.inicio = (this.inicio + 1) % n; // descarta la mas antigua
  }
}