// ¿Cómo definir variables?

var variable;
let variableLet;

const constantes = "Hola, soy una constante";

// Una variable puede cambiar durante el programa y la constantes se mantiene igual siempre

var a = 1;
console.log(a);

a = 4;
console.log(a)

console.log(constantes);
// constantes = "adios" ==> ESTO NO SE PUEDE HACER A UNA CONSTANTE

let b = 3;
console.log(b);

b = 5;
console.log(b);

// la diferencia de "var" y "let" es que var afecta a todo el codigo y let solo en el bloque en el que está