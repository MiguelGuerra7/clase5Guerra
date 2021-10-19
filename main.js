let valorHora = 0;
let cantidadHoras = 0;
let sueldoBruto = 0;
let sueldoNeto = 0;

class Sueldo {
  constructor(valorHora, cantidadHoras, sueldoBruto) {
    this.valorHora = valorHora;
    this.cantidadHoras = cantidadHoras;
    this.sueldoBruto = sueldoBruto;
    this.sueldoNeto = 0;
  }

  calcularRetenciones() {
    return this.sueldoBruto * 0.83;
  }

  calcularSueldoNeto() {
    this.sueldoNeto = this.calcularRetenciones() + this.sueldoBruto;
  }
}

function calculoSueldo() {
  while (!sueldoNeto || sueldoNeto == 0) {
    let categorias = prompt(
      "Seleccionar una categoria: Analista, Supervisor, Jefe"
    );
    let cantidadHoras = parseInt(
      prompt("Ingrese la cantidad de horas trabajadas: ", 0)
    );

    switch (categorias) {
      case "Analista":
        valorHora = 100;
        break;
      case "Supervisor":
        valorHora = 150;
        break;
      case "Jefe":
        valorHora = 200;
        break;
      default:
        alert("El dato ingresado es icorrecto");
        valorHora = 0;
        cantidadHoras = 0;
    }

    return new Sueldo(valorHora, sueldoBruto);
  }
}

const sueldo = calculoSueldo();

sueldo.calcularRetenciones();
sueldo.calcularSueldoNeto();
sueldo.sueldoNeto();

alert(
  "Detalle del sueldo a cobrar:\n" +
    "- " +
    sueldo.calcularRetenciones +
    " x " +
    sueldo.calcularSueldoNeto +
    "Total = $" +
    sueldo.sueldoNeto
);
