// Metodos mas utilizados con cadenas de caracteres

// Como obtener la longitud de una string

let str = 'Hola soy un String';
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() 

// slice(): empieza y termina desde la posicion que tu le indiques

let slice_str = str.slice(0, 10);
console.log(slice_str);

// substring  (): empieza y termina desde la posicion que tu le indiques

let substring_str = str.substring(0, 10);
console.log(substring_str);

// Reemplazar parte del contenido de una cadena del texto

let cadena = 'Hola mi nombre es Maximiliano';
console.log(cadena.replace('Maximiliano', 'Ariel'));

// Reemplazar toda parte del contenido de una cadena del texto

let texto_largo = 'e e e e e e e'
console.log(texto_largo.replaceAll('e', 'a'));

console.log(texto_largo.replace(/e/g, 'a'));

