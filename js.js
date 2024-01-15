
let nombre = '';

while (nombre === '') {
  nombre = prompt("Ingrese su nombre");

  if (nombre === '') {
    alert("Debe ingresar su nombre para continuar");
  }
}

function mostrarNombre() {
  alert("Bienvenido a Concesionaria Volkswagen  " + nombre);
}

mostrarNombre();
function verificarModelo(ModeloIngresado, opcionesModelo) {
  return opcionesModelo.includes(ModeloIngresado);
}

function verificarColor(colorIngresado, opcionesColor) {
  return opcionesColor.includes(colorIngresado);
}
function verificarAnio(AnioIngresado, opcionesAnio) {
  return opcionesAnio.includes(AnioIngresado);
}

let categoriaSeleccionada = prompt(
  `${nombre}, elija la categoría de auto:\n` +
  `1. Sedán\n` +
  `2. Camioneta\n` +
  `3. Coupe\n` +
  `4. SUV`
);

let modeloSeleccionado;
let anioSeleccionado;
let colorSeleccionado = '';

function seleccionarModelo(modelos, nombre) {
  let modeloSeleccionado;
  while (true) {
    modeloSeleccionado = prompt(nombre + " Ingrese el modelo de la categoría seleccionada (" + modelos.join(", ") + ")").trim();
    if (modelos.includes(modeloSeleccionado)) {
      return modeloSeleccionado;
    } else {
      alert(nombre + " Ingrese un modelo válido!");
    }
  }
}

function seleccionarColor(colores, nombre) {
  let colorSeleccionado;
  while (true) {
    let coloresTexto = colores.join("\n");
    colorSeleccionado = prompt("Seleccione el color:\n" + coloresTexto);
    if (parseInt(colorSeleccionado) >= 1 && parseInt(colorSeleccionado) <= colores.length) {
      return colores[parseInt(colorSeleccionado) - 1];
    } else {
      alert(nombre + " Seleccione un color válido!");
    }
  }
}

function seleccionarModelo(modelos, nombre) {
  let modeloSeleccionado;
  while (true) {
    modeloSeleccionado = prompt(nombre + " Ingrese el modelo de la categoría seleccionada (" + modelos.join(", ") + ")").trim();
    if (modelos.includes(modeloSeleccionado)) {
      localStorage.setItem("modeloSeleccionado", modeloSeleccionado);
      return modeloSeleccionado;
    } else {
      alert(nombre + " Ingrese un modelo válido!");
    }
  }
}

function obtenerPrecio(modelo, anio) {
  if (precios.hasOwnProperty(modelo) && precios[modelo].hasOwnProperty(anio)) {
  return precios[modelo.toLowerCase()][anio];
  } else {
    return null; 
  }
}



  let precios = {
    "bora":{
      "2011/150.000km": 7900000,
      "2018/85.000km": 14000000,
      "2023/0km": 2500000,
    },
    "vento":{
      "2019/65.000km": 15000000,
      "2017/90.000km": 11000000,
      "2021/15.000km": 16500000,
    },
    "passatt":{
      "2018/120.000km": 12000000,
      "2019/50.000km": 14800000,
      "2022/28.000km": 18000000,
    },
    "amarok tdi":{
      "2010/180.000km": 11000000,
      "2019/75.000km" : 22000000,
      "2023/0km": 35000000,
    },
    "amarok v6":{
      "2022/18.000km": 30000000,
      "2015/1000.000km": 18000000,
      "2021/10.000km": 38000000,
    },
    "touareg":{
      "2023/0km": 45000000,
      "2023/2.000km": 39000000,
      "2023/11.000km": 34500000,
    },
    "fox":{
      "2011/150.000km": 6200000,
      "2018/85.000km": 9000000,
      "2023/0km": 15000000,
    },
    "Gol Trend":{
      "2011/150.000km": 6500000,
      "2018/85.000km": 8400000,
      "2023/0km": 11000000,
    },
    "Scirocco":{
      "2011/150.000km": 19000000,
      "2018/85.000km": 36000000,
      "2023/0km": 48000000,
    },
    "Suran":{
      "2011/150.000km": 5800000,
      "2018/85.000km": 10000000,
      "2023/0km": 15000000,
    },
    "Tiguan":{
      "2011/150.000km": 12000000,
      "2018/85.000km": 31000000,
      "2023/0km": 55000000,
    },
    "Taos":{
      "2011/150.000km": 0,
      "2018/85.000km": 0,
      "2023/0km": 38000000,
    },
    
}



switch (categoriaSeleccionada) {
  case "1":
      categoriaSeleccionada = "Sedán";
      let modelosSedan = {
        "bora": { anios: ["2011/150.000km", "2018/85.000km", "2023/0km"] },
        "vento": { anios: ["2019/65.000km", "2017/90.000km", "2021/15.000km"] },
        "passatt": { anios: ["2018/120.000km", "2019/50.000km", "2022/28.000km"] }
      };
      let coloresSedan = ["1. Rojo", "2. Blanco", "3. Negro", "4. Gris Plomo"];
      let modeloSeleccionadoSedan;
      while (true) {
        modeloSeleccionadoSedan = prompt(nombre + " Ingrese el modelo de la categoría seleccionada (Bora, Vento, Passatt)").toLowerCase();
        if (modelosSedan.hasOwnProperty(modeloSeleccionadoSedan)) {
          break;
        } else {
          alert(nombre + " Ingrese un modelo válido!");
        }
      }
      let colorSeleccionadoSedan;
      while (true) {
        let coloresTexto = coloresSedan.join("\n");
        colorSeleccionadoSedan = prompt("Seleccione el color:\n" + coloresTexto);
        if (parseInt(colorSeleccionadoSedan) >= 1 && parseInt(colorSeleccionadoSedan) <= coloresSedan.length) {
          break;
        } else {
          alert(nombre + " Seleccione un color válido!");
        }
      }
      switch (parseInt(colorSeleccionadoSedan)) {
        case 1:
          colorSeleccionadoSedan = "Rojo";
          break;
        case 2:
          colorSeleccionadoSedan = "Blanco";
          break;
        case 3:
          colorSeleccionadoSedan = "Negro";
          break;
        case 4:
          colorSeleccionadoSedan = "Gris Plomo";
          break;
      }
  
      let anioSeleccionadoSedan;
      while (true) {
        let aniosTexto = modelosSedan[modeloSeleccionadoSedan].anios.map((anio, index) => `${index + 1}. ${anio}`).join("\n");
        anioSeleccionadoSedan = prompt("Años disponibles:\n" + aniosTexto);
        anioSeleccionadoSedan = modelosSedan[modeloSeleccionadoSedan].anios[parseInt(anioSeleccionadoSedan) - 1];
        if (anioSeleccionadoSedan) {
          let precioSedan = obtenerPrecio(modeloSeleccionadoSedan, anioSeleccionadoSedan);
          if (precioSedan !== null) {
            alert(`El precio del ${modeloSeleccionadoSedan.charAt(0).toUpperCase() + modeloSeleccionadoSedan.slice(1)} ${anioSeleccionadoSedan} es: ${precioSedan}`);
          } else {
            alert(nombre + " No se encontró el precio para este vehículo");
          }
          break;
        } else {
          alert(nombre + " Seleccione un año válido!");
        }
      }
        modeloSeleccionado = modeloSeleccionadoSedan;
        anioSeleccionado = anioSeleccionadoSedan;
      break;
  case "2":
      categoriaSeleccionada = "Camioneta";
      let modelosCamioneta = {
        "amarok tdi": { anios: ["2010/180.000km", "2019/75.000km", "2023/0km"] },
        "amarok v6": { anios: ["2022/18.000km", "2015/100.000km", "2021/10.000km"] },
        "touareg": { anios: ["2023/0km", "2023/2.000km", "2023/11.000km"] }
      };
      let opcionesModelosCamioneta = Object.keys(modelosCamioneta);
      let modeloSeleccionadoCamioneta;

      while (true) {
        modeloSeleccionadoCamioneta = prompt(nombre + " Ingrese el modelo de la categoría seleccionada (Amarok TDI, Amarok v6, Touareg)").toLowerCase();
        if (opcionesModelosCamioneta.includes(modeloSeleccionadoCamioneta)) {
          break;
        } else {
          alert(nombre + " Ingrese un modelo válido!");
        }
      }

      let coloresCamioneta = ["1. Azul", "2. Blanco", "3. Negro", "4. Gris Plomo"];
      let colorSeleccionadoCamioneta;

      while (true) {
        let coloresTexto = coloresCamioneta.join("\n");
        colorSeleccionadoCamioneta = prompt("Seleccione el color:\n" + coloresTexto);
        if (parseInt(colorSeleccionadoCamioneta) >= 1 && parseInt(colorSeleccionadoCamioneta) <= coloresCamioneta.length) {
          break;
        } else {
          alert(nombre + " Seleccione un color válido!");
        }
      }

      switch (parseInt(colorSeleccionadoCamioneta)) {
        case 1:
          colorSeleccionadoCamioneta = "Azul";
          break;
        case 2:
          colorSeleccionadoCamioneta = "Blanco";
          break;
        case 3:
          colorSeleccionadoCamioneta = "Negro";
          break;
        case 4:
          colorSeleccionadoCamioneta = "Gris Plomo";
          break;
      }

      let anioSeleccionadoCamioneta;
      while (true) {
        let aniosTexto = modelosCamioneta[modeloSeleccionadoCamioneta].anios.map((anio, index) => `${index + 1}. ${anio}`).join("\n");
        anioSeleccionadoCamioneta = prompt("Años disponibles:\n" + aniosTexto);
        anioSeleccionadoCamioneta = modelosCamioneta[modeloSeleccionadoCamioneta].anios[parseInt(anioSeleccionadoCamioneta) - 1];
        if (anioSeleccionadoCamioneta) {
          break;
        } else {
          alert(nombre + " Seleccione un año válido!");
        }
      }
      let precioCamioneta = obtenerPrecio(modeloSeleccionadoCamioneta, anioSeleccionadoCamioneta);
      if (precioCamioneta !== null) {
        alert(`El precio del ${modeloSeleccionadoCamioneta} ${anioSeleccionadoCamioneta} es: ${precioCamioneta}`);
      } else {
        alert(nombre + " No se encontró el precio para este vehículo");
      }
      modeloSeleccionado = modeloSeleccionadoCamioneta;
      anioSeleccionado = anioSeleccionadoCamioneta;
      break;

      case "3":
      categoriaSeleccionada = "Coupe";
      let modelosCoupe = ["fox", "gol trend", "scirocco"];
      let coloresCoupe = ["1. Rojo", "2. Blanco", "3. Negro", "4. Gris Plomo"];
      let aniosCoupe = ["2011/150.000km", "2018/85.000km", "2023/0km"];

      let modeloSeleccionadoCoupe;
      while (true) {
        modeloSeleccionadoCoupe = seleccionarModelo(modelosCoupe, nombre);
        if (modelosCoupe.includes(modeloSeleccionadoCoupe)) {
          break;
        } else {
          alert(nombre + " Ingrese un modelo válido!");
        }
      }

      let colorSeleccionadoCoupe;
      while (true) {
        colorSeleccionadoCoupe = seleccionarColor(coloresCoupe, nombre);
        if (verificarColor(colorSeleccionadoCoupe, coloresCoupe)) {
          break;
        } else {
          alert(nombre + " Seleccione un color válido!");
        }
      }

      let anioSeleccionadoCoupe;
      while (true) {
        anioSeleccionadoCoupe = seleccionarAnio(aniosCoupe, nombre);
        if (verificarAnio(anioSeleccionadoCoupe, aniosCoupe)) {
          break;
        } else {
          alert(nombre + " Seleccione un año válido!");
        }
      }

      modeloSeleccionado = modeloSeleccionadoCoupe.charAt(0).toUpperCase() + modeloSeleccionadoCoupe.slice(1);
      anioSeleccionado = anioSeleccionadoCoupe;

      let precioCoupe = obtenerPrecio(modeloSeleccionadoCoupe.toLowerCase(), anioSeleccionadoCoupe);
      if (precioCoupe !== null) {
        alert(`El precio del ${modeloSeleccionado} ${anioSeleccionado} es: ${precioCoupe}\n¿Desea comprar este auto?`);
      } else {
        alert(nombre + " No se encontró el precio para este vehículo");
      }

      break
      case "4":
        categoriaSeleccionada = "SUV";
        let modelosSUV = ["Suran", "Tiguan", "Taos"];
        let coloresSUV = ["1. Rojo", "2. Blanco", "3. Negro", "4. Gris Plomo"];
        let aniosSUV = ["2011/150.000km", "2018/85.000km", "2023/0km"];

        let modeloSeleccionadoSUV;
        while (true) {
          modeloSeleccionadoSUV = seleccionarModelo(modelosSUV.map(modelo => modelo.toLowerCase()), nombre);
          if (modelosSUV.includes(modeloSeleccionadoSUV.charAt(0).toUpperCase() + modeloSeleccionadoSUV.slice(1))) {
            break;
          } else {
            alert(nombre + " Ingrese un modelo válido!");
          }
        }

        let colorSeleccionadoSUV;
        while (true) {
          colorSeleccionadoSUV = seleccionarColor(coloresSUV, nombre);
          if (verificarColor(colorSeleccionadoSUV, coloresSUV)) {
            break;
          } else {
            alert(nombre + " Seleccione un color válido!");
          }
        }

        let anioSeleccionadoSUV;
        if (modeloSeleccionadoSUV.toLowerCase() === "taos") {
          while (true) {
            anioSeleccionadoSUV = seleccionarAnio(["2023/0km"], nombre);
            if (verificarAnio(anioSeleccionadoSUV, ["2023/0km"])) {
              break;
            } else {
              alert(nombre + " Seleccione un año válido!");
            }
          }
        } else {
          anioSeleccionadoSUV = seleccionarAnio(aniosSUV, nombre);
        }

        let precioSUV = obtenerPrecio(modeloSeleccionadoSUV.toLowerCase(), anioSeleccionadoSUV.toLowerCase()); // Convertir a minúsculas
        if (precioSUV !== null) {
          alert(`El precio del ${modeloSeleccionadoSUV} ${anioSeleccionadoSUV} es: ${precioSUV}`);
        } else {
          alert(nombre + " No se encontró el precio para este vehículo");
        }
        modeloSeleccionado = modeloSeleccionadoSUV;
        anioSeleccionado = anioSeleccionadoSUV;
        break;
        
}

  function metodoDePago() {
    let metodoPago = prompt(nombre + " Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta de crédito\n3. Transferencia bancaria");
  
    switch (metodoPago) {
      case "1":
        alert("Pago confirmado. Gracias por su compra en efectivo.");
        break;
      case "2":
     let numeroTarjeta;
      while (true) {
        numeroTarjeta = prompt("Ingrese el número de tarjeta de crédito:");
        if (!isNaN(numeroTarjeta) && numeroTarjeta !== null && numeroTarjeta !== "" && numeroTarjeta.trim() !== "") {
          break; 
        } else {
          alert(nombre + " Por favor, ingrese solo números para la tarjeta de crédito.");
        }
      }
      alert(`Pago confirmado. Gracias por su compra con la tarjeta de crédito terminada en ${numeroTarjeta.slice(-4)}.`);
      break;
      case "3":
         let cuentaBancaria;
      while (true) {
        cuentaBancaria = prompt("Ingrese el número de cuenta bancaria:");
        if (!isNaN(cuentaBancaria) && cuentaBancaria !== null && cuentaBancaria !== "" && cuentaBancaria.trim() !== "") {
          break; 
        } else {
          alert(nombre + " Por favor, ingrese solo números para la cuenta bancaria.");
        }
      }
      alert(`Pago confirmado. Gracias por su compra mediante transferencia bancaria a la cuenta ${cuentaBancaria}.`);
      break;
    default:
      alert(nombre + " Método de pago no válido. La compra ha sido cancelada.");
  }
}
  
  let precioVehiculo = obtenerPrecio(modeloSeleccionado, anioSeleccionado);

  document.addEventListener("DOMContentLoaded", function() {
    let comprarAuto = confirm(`El precio del ${modeloSeleccionado.charAt(0).toUpperCase() + modeloSeleccionado.slice(1)} ${anioSeleccionado} es: ${precioVehiculo}\n¿Desea comprar este auto?`);
  
    if (comprarAuto) {
      metodoDePago();
  
      var imagenAuto;
      switch (colorSeleccionado.toLowerCase()) {
        case "rojo":
          imagenAuto = document.getElementById("imagenborarojo");
          break;
        case "blanco":
          imagenAuto = document.getElementById("imagenborablanco");
          break;
        case "negro":
          imagenAuto = document.getElementById("imagenboranegro");
          break;
        case "gris":
          imagenAuto = document.getElementById("imagenboragris");
          break;
        default:
          imagenAuto = null
      }
  
      imagenAuto.src = `./medios/${modeloSeleccionado.toLowerCase()}${colorSeleccionado.toLowerCase()}.png`;
  
      imagenAuto.onload = function () {
        console.log("La imagen se ha cargado completamente");
      };
    } else {
      alert(nombre + " Gracias por visitar Concesionaria Volkswagen.");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    var nombreImagen = `${modeloSeleccionado.toLowerCase()}${colorSeleccionado.toLowerCase()}`;
    
    var imagenAuto = document.getElementById(`imagen${nombreImagen}`);
  
    if (imagenAuto) {
      var tempImage = new Image();
      tempImage.onload = function () {
        imagenAuto.src = `./medios/${nombreImagen}.png`;
        console.log("La imagen se ha cargado completamente");
      };
      tempImage.onerror = function () {
        console.log("Imagen no encontrada");
        imagenAuto.style.display = "none";
      };
      tempImage.src = `./medios/${nombreImagen}.png`;
    } else {
      console.log("Elemento de imagen no encontrado");
    }
  });
  
 