// query selector
const heading = document.querySelector('.header__texto h2') // 0 a 1 elemento maximo
heading.textContent = 'Nuevo Heading';
console.log(heading);

// query selector all
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo texto para enlace'
enlaces[0].classList.add('Nueva-clase');
// enlaces[0].classList.remove ('navegacion__enlace');


// getelements byid

const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar texto
nuevoEnlace.textContent = 'Tienda Viertual';
// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

// console.log (1);

// window.addEventListener ('load', function () { //load espera a que el js y los archivos que dependen de HTML esten listos
//     console.log (2);
//     });

// document.addEventListener ('DOMContentLoaded',function (){ //Solo espera por el html, pero no espera css o imagenes
//     console.log(4);
// });

// window.onscroll = function () {
//     console.log ('scrolling...');
// };


// seleccionar elementos y asociar un evento
// const btnEnviar = document.querySelector ('.boton--primario');
// btnEnviar.addEventListener ('click', function(evento) {    //asociado al boton, imagenes y textos
//     console.log(evento);
//     evento.preventDefault();
//     //validar un formulario
//     console.log('enviado formulario');
// });


const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos);

    // Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}

