// Metodos de cadenas de texto (parte 3)
//  https://regexr.com

let texto_largo = 'Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles.'

// El '/los/g ' significa que busque todas las palabras dentro de los slash

console.log(texto_largo.match(/los/g));
console.log(texto_largo.match(/no/g));

// includes() te devuelve un valor booleano si existe una palabra o no

console.log(texto_largo.includes('prefiere'));

// startsWith() saber si un texto empieza con una palabra

console.log(texto_largo.startsWith('arboles'));
console.log(texto_largo.startsWith('Tito'));

// endWith saber si un texto empieza con una palabra

console.log(texto_largo.endsWith('arboles.'))