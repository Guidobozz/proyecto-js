let nombre = '';

while (nombre === '') {
  nombre = prompt("Ingrese su nombre");

  if (nombre === '') {
    alert("Debe ingresar su nombre para continuar");
  }
}

function mostrarNombre() {
  alert("Bienvenido " + nombre);
}

mostrarNombre();

function verificarTalle(talleIngresado, opcionesTalle) {
  return opcionesTalle.includes(talleIngresado);
}

function verificarColor(colorIngresado, opcionesColor) {
  return opcionesColor.includes(colorIngresado);
}

let continuarComprando = true;
let historialCompras = '';
while (continuarComprando) {
  let productos;

  while (true) {
    let input = prompt(
      `Escriba el número del producto que desea comprar, ${nombre}\n` +
      `1. Remera\n` +
      `2. Zapatilla\n` +
      `3. Pantalón`
    );
  
    if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 3) {
      productos = parseInt(input);
      break; 
    } else {
      alert(nombre + " Por favor, ingrese un número válido del 1 al 3");
    }
  }

  let productoSeleccionado = '';
  let talleSeleccionado = '';
  let colorSeleccionado = '';

  switch (productos) {
    case 1:
      productoSeleccionado = "Remera";
      let tallesRemera = ["S", "M", "L", "XL"];
      let coloresRemera = ["Negro", "Blanco", "Rojo"];
      
      while (true) {
        talleSeleccionado = prompt(nombre +" Ingrese el talle: (S, M, L, XL)");
        if (verificarTalle(talleSeleccionado, tallesRemera)) {
          break;
        } else {
          alert(nombre +" Ingrese un talle válido!");
        }
      }

      while (true) {
        colorSeleccionado = prompt(nombre +" Ingrese el color: (Negro, Blanco, Rojo)");
        if (verificarColor(colorSeleccionado, coloresRemera)) {
          break;
        } else {
          alert(nombre +" Ingrese un color válido! ")
        }
      }
      break;
    
    case 2:
      productoSeleccionado = "Remera";
      let talleZapatilla = ["39","40","41","42"];
      let colorZapatilla = ["Negro","Blanco","Rojo"];
      
      while (true) {
      talleSeleccionado = prompt(nombre + " Ingrese el talle: (39, 40, 41, 42)");
        if (verificarTalle(talleSeleccionado,talleZapatilla)) {
          break;
        } else {
          alert(nombre +" ingrese un talle válido!");
        }
      }

      while (true) {
        colorSeleccionado = prompt("Ingrese el color:(Negro, Blanco, Rojo)");
        if (verificarColor(colorSeleccionado,colorZapatilla)) {
          break;
        } else {
          alert(nombre + " Ingrese un color válido! ")
        }
      }
      break;
    
    case 3:
      productoSeleccionado = "Pantalon"
      let tallePantalon = ["S","M","L","XL"];
      let colorPantalon = ["Negro","Blanco","Gris"];
      
      while (true) {
        talleSeleccionado = prompt(nombre +" Ingrese el talle: (S, M, L, XL)");
        if (verificarTalle(talleSeleccionado, tallePantalon)) {
          break;
        } else {
          alert(nombre +" ingrese un talle válido!");
        }
      }

      while (true) {
        colorSeleccionado = prompt(nombre +" Ingrese el color:(Negro, Blanco, Rojo)");
        if (verificarColor(colorSeleccionado, colorPantalon)) {
          break;
        } else {
          alert(nombre + " Ingrese un color válido! ")
        }
      }
      break;
    
}
 let resumenCompra = `${nombre} seleccionaste ${productoSeleccionado} de talle ${talleSeleccionado} y color ${colorSeleccionado}`;
  
  historialCompras += resumenCompra + '\n';
  
  let continuar = confirm("¿Desea seguir comprando?");
  
  if (!continuar) {
    continuarComprando = false;
    alert(nombre + ` Finalizaste la compra. Resumen de tu compra:\n${historialCompras}`);
  }
}