//menu
function verEjercicio(numero) {
    let vistas = [1,2,3,4];
    let ejercicio = document.getElementById("ejercicio"+numero);
    ejercicio.style.display = "";

    borrar = vistas.indexOf(numero);
    vistas.splice(borrar, 1);

    vistas.forEach(element => {
        document.getElementById("ejercicio"+element).style.display = "none";
    });
}


// Ejercicio 1
let palabraInput = document.getElementById("palabraInput");
let imprirPalabra = document.getElementById("imprirPalabra");

palabraInput.addEventListener('keyup', function() {

    let palabra = palabraInput.value;

    let tamaño = palabra.length;
    let espacios = 0;
    let palabraAlRevez = "";

    for (let i = palabra.length - 1; i > -1; i--) {

        if (palabra[i] == " ") {
            espacios ++;
        }
        palabraAlRevez = palabraAlRevez + palabra[i] + ',';
    }

    imprirPalabra.innerHTML = "frase invertida: " + palabraAlRevez;
    imprirPalabra.innerHTML += "<br>Tamaño de la frase: " + espacios;
    imprirPalabra.innerHTML += "<br>Espacios en la frase: " + tamaño;

});

// Ejercicio 2

let cadenaInput = document.getElementById("cadenaInput");
let imprirCadena = document.getElementById("imprirCadena");

cadenaInput.addEventListener('keyup', function() {

    let cadena = cadenaInput.value;

    let cadenaConGuiones = "";

    for (let i = 0; i < cadena.length; i++) {

        if (cadena[i+1] == " ") {
            cadenaConGuiones = cadenaConGuiones + cadena[i] + "--";
        }else if (!(cadena[i] == " ")) {
            cadenaConGuiones = cadenaConGuiones + cadena[i] + "-";
        }
    }

    imprirCadena.innerHTML = "frase invertida: " + cadenaConGuiones;

});

// Ejercicio 3

let nombres = new Array();

let nombre = document.getElementById('nombre');
let tabla = document.getElementById('tabla');
let error = document.getElementById('error');


function guardarNombre() {

    if (nombre.value == "") {
        let boton = document.getElementById('boton');

        boton.style.display = "none";
        nombre.style.display = "none";
        error.style.display = "none";
    }else if (!(nombres.indexOf(nombre.value) > -1)) {
        
            nombres.push(nombre.value);
            tabla.innerHTML += "<br>"+nombres.length + ". " + nombre.value;
            error.innerHTML = "Agregado Correctamente";
            nombre.value = "";
    }else{
        error.innerHTML = "el nombre " + nombre.value + " ya existe";
    }

}


// Ejercicio 4

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.getElementById("resultado");

let simbolo = "+"

function operacion(simbolo) {
    

    switch (simbolo) {
        case '+':
            let suma = parseInt(valor1.value) + parseInt(valor2.value);
            resultado.innerHTML = valor1.value + " + " + valor2.value + " = " + suma
        break;
        case '-':
            let resta = parseInt(valor1.value) - parseInt(valor2.value);
            resultado.innerHTML = valor1.value + " - " + valor2.value + " = " + resta
        break;
        case 'x':
            let multiplicacion = parseInt(valor1.value) * parseInt(valor2.value);
            resultado.innerHTML = valor1.value + " x " + valor2.value + " = " + multiplicacion
        break;
        case '/':
            let divicion = parseInt(valor1.value) / parseInt(valor2.value);
            resultado.innerHTML = valor1.value + " / " + valor2.value + " = " + divicion
        break;
    }
}

valor1.addEventListener('keyup', function() {
    operacion(simbolo);
});
valor2.addEventListener('keyup', function() {
    operacion(simbolo);
});

function eliminar() {
    valor1.value = '';
    valor2.value = '';
    resultado.innerHTML = "";
}