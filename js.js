/*
 Carrito que se vea en si no lo hice, porque como es una consecionaria nadie va a comprar mas de un vehiculo.
 lo que intente fue hacer un carrito que no se almacene mas de un vehiculo y en el localStorage guardar todos lo que
 se vayan comprando. 
 */

let nombre = '';

function pedirNombre() {
  return Swal.fire({
    title: 'Ingrese su nombre',
    input: 'text',
    icon: 'question',
    inputPlaceholder: 'Ingrese su nombre',
    showCancelButton: false,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Debe ingresar su nombre para continuar';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      nombre = result.value;
      mostrarNombre(); 
    }
  });
}


function mostrarNombre() {
  Swal.fire({
    title: `Bienvenido a Concesionaria Volkswagen, ${nombre}!`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    mostrarLoader();
  });
}

pedirNombre();

function mostrarLoader() {
  const footer = document.getElementById('ft');
  footer.style.display = 'none';

  const cardContainer = document.getElementById('cardcontainer');
  cardContainer.style.display = 'none';

  document.body.classList.add('loading');

  const loaderContainer = document.createElement("div");
  loaderContainer.className = "loader-container";

  const loader = document.createElement("span");
  loader.className = "loader";

  loaderContainer.appendChild(loader);
  document.body.appendChild(loaderContainer);

  setTimeout(() => {
    loaderContainer.style.display = 'none';
    document.body.classList.remove('loading');
    footer.style.display = 'block';
    cardContainer.style.display = 'flex'; 
  }, 3000);
}


function cargarCarrito() {
  carrito = JSON.parse(localStorage.getItem('carrito')) || {};
  contadorCarrito = Object.keys(carrito).length + 1;
}

document.addEventListener('DOMContentLoaded', () => {
  cargarCarrito();
  fetchData();
  traerh1();
  subtitulo();
  crearFooter();
  pedirNombre(); 
  createContactForm();
}); 


let carrito = JSON.parse(localStorage.getItem('carrito')) || {};
let contadorCarrito = Object.keys(carrito).length + 1;


const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5500/lista.json'); 
    const data = await res.json();
    
    createCards(data);
  } catch (error) {
    
  }
}


function createCards(data) {
  const cardContainer = document.getElementById('cardcontainer');

  function addToCarrito(auto) {
    carrito[contadorCarrito] = auto;
    contadorCarrito++;
    guardarCarrito();
  
    Swal.fire({
      title: `${nombre}`,
      text: `Has añadido ${auto.title} al carrito. ¿Quieres iniciar la compra?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        iniciarCompra(auto);
      } else {
        carrito = {};
        contadorCarrito = 1;
        
        
       
      }
    });
  }

  function iniciarCompra(auto) {
    Swal.fire({
      title: 'Selecciona el método de pago:',
      icon: 'warning',
      input: 'select',
      inputOptions: {
        '1': 'Efectivo',
        '2': 'Transferencia',
        '3': 'Plan de pago',
      },
      inputPlaceholder: 'Selecciona un método de pago',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes seleccionar un método de pago para continuar';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const metodoPago = result.value;

        if (metodoPago === '1') {
          Swal.fire(`Pago en efectivo para ${auto.title}`, '¡Gracias por tu compra!', 'success');
        } else if (metodoPago === '2') {
          Swal.fire({
            title: `Transferencia para ${auto.title}`,
            text: 'Ingresa el número de cuenta bancaria:',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Realizar transferencia',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              const numeroCuenta = result.value;
              Swal.fire(`Transferencia realizada para ${auto.title}`, `Número de cuenta: ${numeroCuenta}. ¡Gracias por tu compra!`, 'success');
            }
          });
        } else if (metodoPago === '3') {
          const cuotas = 12;
          const precioConInteres = auto.precio * 1.25;
          const cuotaMensual = precioConInteres / cuotas;

          Swal.fire({
            title: `Plan de pago para ${auto.title}`,
            text: `Seleccionaste un plan de pago en ${cuotas} cuotas con un interés del 25%. Cada cuota será de ${cuotaMensual.toFixed(2)}. ¿Quieres continuar con la compra?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
              addToCarrito(auto);
              ingresarDatosCompra();
            } else {
              Swal.fire('Compra cancelada', '', 'error');
            }
          });
        } else {
          Swal.fire('Compra cancelada', 'No se ha seleccionado un método de pago válido.', 'error');
        }
      }
    });
  }



function ingresarDatosCompra() {
  Swal.fire({
    title: 'Ingresa tus datos de compra',
    html: `
      <input type="text" id="numeroTarjeta" class="swal2-input" placeholder="Número de tarjeta">
      <input type="text" id="dni" class="swal2-input" placeholder="Número de DNI">
      <input type="text" id="nombreApellido" class="swal2-input" placeholder="Nombre y apellido">
    `,
    showCancelButton: true,
    confirmButtonText: 'Finalizar compra',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const numeroTarjeta = document.getElementById('numeroTarjeta').value;
      const dni = document.getElementById('dni').value;
      const nombreApellido = document.getElementById('nombreApellido').value;

      return { numeroTarjeta, dni, nombreApellido };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { numeroTarjeta, dni, nombreApellido } = result.value;
      Swal.fire(
        '¡Gracias por tu compra!',
        `
        Número de tarjeta: ${numeroTarjeta}
        DNI: ${dni}
        Nombre y apellido: ${nombreApellido}`,
        'success'
      );

      carrito = {};
      contadorCarrito = 1;
      guardarCarrito();
    }
  });
}



  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
  }



  data.forEach(car => {
      const card = document.createElement('div');
      card.className = 'card';

      const image = document.createElement('img');
      image.src = car.thumbnailUrl;
      image.alt = car.title;

      const description = document.createElement('p');
      description.textContent = car.description;

      const price = document.createElement('p');
      price.textContent = `Precio: ${car.precio}`;

      const title = document.createElement('h3');
      title.textContent = car.title;

      const button = document.createElement('button');
      button.textContent = 'Comprar';

      button.addEventListener('click', () => {
        addToCarrito(car);
    });

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(price);
      card.appendChild(button);

    cardContainer.appendChild(card);
});
}



function traerh1() {
  const nav = document.getElementById('nav');
  const title = document.createElement('h1');
  title.textContent = 'Concesionaria Bozzano'; 
  nav.appendChild(title);
}

function subtitulo() {
  const nav = document.getElementById('subtitulo');
  const title = document.createElement('h2');
  title.textContent = 'Servicios, Innovación, Tecnología'; 
  nav.appendChild(title);
}


function crearFooter() {
  const ft = document.getElementById('ft');

  const contenedorFooter = document.createElement('div');
  contenedorFooter.className = 'contenedor-footer';

  ft.appendChild(contenedorFooter);

  const card1 = document.createElement('div');
  card1.className = 'card-footer'; 

  const imagen1 = document.createElement('img');
  imagen1.src = 'https://assets.volkswagen.com/is/image/volkswagenag/cobertura?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEwODAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2Q5YQ==';
  imagen1.alt = 'Imagen 1';

  const subtitulo1 = document.createElement('h3');
  subtitulo1.textContent = 'Nueva Cobertura VW Zurich';

  const parrafo1 = document.createElement('p');
  parrafo1.textContent = 'Encontrá las mejores opciones de seguro para tu Volkswagen y viajá con tranquilidad.';

  card1.appendChild(imagen1);
  card1.appendChild(subtitulo1);
  card1.appendChild(parrafo1);

  contenedorFooter.appendChild(card1);

  const card2 = document.createElement('div');
  card2.className = 'card-footer'; 

  const imagen2 = document.createElement('img');
  imagen2.src = 'https://assets.volkswagen.com/is/image/volkswagenag/newsroommmm?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTg1MyZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZkMjE3';
  imagen2.alt = 'Imagen 2';

  const subtitulo2 = document.createElement('h3');
  subtitulo2.textContent = 'Las novedades están en Volkswagen Newsroom';

  const parrafo2 = document.createElement('p');
  parrafo2.textContent = 'Descubrí acá las últimas noticias de la marca: Lanzamientos, servicios, inversiones y toda la información sobre la nueva era de la movilidad.';

  card2.appendChild(imagen2);
  card2.appendChild(subtitulo2);
  card2.appendChild(parrafo2);

  contenedorFooter.appendChild(card2);

  const card3 = document.createElement('div');
  card3.className = 'card-footer'; 

  const imagen3 = document.createElement('img');
  imagen3.src = 'https://assets.volkswagen.com/is/image/volkswagenag/tecnologia?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE3OTUmaGVpPTE3OTUmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmOWFkNg==';
  imagen3.alt = 'Imagen 3';

  const subtitulo3 = document.createElement('h3');
  subtitulo3.textContent = 'Tecnología Volkswagen pensada para vos';

  const parrafo3 = document.createElement('p');
  parrafo3.textContent = 'Subí a tu VW y seguí conectado con todo lo que te importa. Viví la movilidad del futuro y descubrí una tecnología pensada para que cada viaje sea más fácil, seguro y entretenido.';

  card3.appendChild(imagen3);
  card3.appendChild(subtitulo3);
  card3.appendChild(parrafo3);

  contenedorFooter.appendChild(card3);
}


function createContactForm() {

  const formContainer = document.getElementById('formulario'); 
  const form = document.createElement('form');
  form.id = 'formulario';

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Correo Electrónico:';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.required = true;

  const additionalInfo = document.createElement('p');
  additionalInfo.textContent = 'Ingresa tu correo electrónico para recibir más información.';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.id = 'submitBtn';
  submitBtn.textContent = 'Enviar';
  submitBtn.classList.add('btn', 'btn-primary'); 

  submitBtn.addEventListener('click', function (event) {
   
    event.preventDefault();
    Toastify({
      text: 'Correo electrónico enviado',
      duration: 3000
    }).showToast();
  });

  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(additionalInfo); 
  form.appendChild(submitBtn);
  formContainer.appendChild(form);
}
