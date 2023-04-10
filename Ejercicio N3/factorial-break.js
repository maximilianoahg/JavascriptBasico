// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var almacen = 1;
var i = 10

while (true){

    almacen = almacen * i;
    i = i - 1 ;
    if (i === 0){
        break
    }

}

console.log(almacen);