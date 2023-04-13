v = 'Hola'; 
{
    var a = 'Mundo'; 
    let b = 'Esta es una variable local';
}


const c = 10; 

var n= 10_000_000_000;


console.log(v);

if(true){
console.log('Es verdadero!');
}else {
console.log('Es falso!');
}

var f= (x, j,a)=>{
    
    console.log((x+j)*a);
  
}

console.log(f(10,10,5));


//Ejercicio 25.
var Resultado = (x,f,m) =>{
    console.log((x+f)*m);
}
console.log('El resultado es:')
console.log(Resultado(10,10,2));

//Ejercicio 26.

var Resultado = (x,f,m,j) =>{
    console.log((x-f)*(m/j));
}
console.log('El resultado es:')
console.log(Resultado(10,5,4,2));