//Ejercicio 10
function positivo(num) {
    return num >= 0;
}
console.log(positivo(10));

//Ejercicio 25
function suma (a,b,j){
    return suma = (a+b)*j;
}
console.log('El resultado es:')
console.log(suma(10,20,2));

//Ejercicio 26
function resultado (x,f,j,m){
    return resultado = ((x-f)*(m/j));
}
console.log('El resultado es:')
console.log(resultado(10,5,4,2));

//Ejercicio 29

function calculos (dato1, dato2, booleano){
    if (booleano){
        return Math.pow(dato1, dato2);
    }else {
        return Math.sqrt(dato2);
    }
}
console.log(calculos(5, 3, true))