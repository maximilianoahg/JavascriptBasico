// Metodos de cadenas de texto (parte 2)

let input = 'Escorpio';
let db = 'escorpio';

// toLowerCase() - toUpperCase()

console.log(input === db);
console.log(input.toLowerCase === db.toLowerCase);

// Convierte la cadena de caracteres en minusculas

console.log(input.toLowerCase());

// Convierte la cadena de caracteres en mayusculas

console.log(db.toUpperCase());

//Formas de concatenar dos cadenas de acaracteres

let str_1 = 'Hola soy la primera cadena';
let str_2 = 'Y yo soy la nsegunda cadena';

console.log(str_1.concat('. ',str_2));
console.log(str_1 + ' ' + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str_3 = '     Hola soy un str con espacios al final.   '

console.log(str_3.length);

//trim(): Elimina los espacios del principio y el final

console.log(str_3.trim().length);

//trimStart(): Elimina los espacios del principio

console.log(str_3.trimStart().length);

//trimEnd(): Elimina los espacios del final

console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion

let str_4 = 'Hola soy el str numero 4';

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra de una cadena de caracteres

let str_5 = 'Hola soy Maximiliano y tengo 2 gatos y me gustan los gatos';

console.log(str_5.indexOf('gatos'));
console.log(str_5[31]);
console.log(str_5.lastIndexOf('gatos'));