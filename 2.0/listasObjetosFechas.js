// Listas, arrays o arreglos

const lista1 = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3);
lista3[0] = 'soy el primer elemento';
const lista4 = [lista1, lista2, lista3];

console.log(lista1)
console.log(lista2)
console.log(lista3)
console.log(lista4)

// Objetos 

const movil = {
    altura: 10,
    anchura: 5,
    marca: 'Xiaomi',
    isWhite: false,
    contactos: ['Maximiliano', 'Ariel', 'Hernandez'],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.annio = 2019;


console.log(movil.annio)

// Fechas
// Librerias de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 20 2003");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 4 , 15);
console.log(fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const annio = ahora.getFullYear();

console.log(dia, mes, annio);