// Comparaciones

// Igualdad

if (5 == 5){
    console.log("5 es igual a 5");
}

if (5 === 5){
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// == solo compara el valor
// === compara el valor y el tipo

if (a == b){
    console.log("a es igual a b - DEBIL");
}

if (a === b){
    console.log("a es igual a b - FUERTE");
}

// Desigualdad

let c = 4;
let d = "4";

if (c != d){
    console.log("a es diferente a b - DEBIL");
}

if (c !== d){
    console.log("a es diferente a b - FUERTE");
}