let nombre = 'Maximiliano';
let apellido = 'Hernandez';

let estudiante = nombre.concat(' ' + apellido);

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let estudianteLength = estudiante.length;

let nombreFirst = nombre.charAt(0)

let apellidoLast = apellido.slice(-1)

let estudianteNotSpace = estudiante.replace(/ /g, '');

let estudianteIncludes = estudiante.includes(nombre) 

console.log(estudianteIncludes);
