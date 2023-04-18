//Ejercicio 1
function Suma(num1, num2){
    return sum = num1+num2;
}
console.log("El resultado de la suma es:"+ Suma(30,30))

//Ejecicio 2

function LongitudCadena(cadena){
    return cadena.length;
}
console.log("La suma de las letras es: "+ LongitudCadena("Hola Mundo"));

//Ejercicio 3

function SumaArreglo(Sumadatos){
    let Suma = 0;   
    console.log(Sumadatos)
    for(let i = 0; i < Sumadatos.length; i++){ 
        Suma += Sumadatos[i];
    }
    return Suma;
}
console.log(SumaArreglo([10, 10, 10, 10]));

//Ejercicio 4 
function InvertirCadena(Palabra, PalaraInvertida) {
    console.log(Palabra)
    PalaraInvertida = Palabra.split('').reverse().join('');
    return PalaraInvertida;
}
console.log(InvertirCadena("Hola"));

//Ejercicio 5

function PrimerElemento(Arreglo){
    console.log(Arreglo)
    return Arreglo[0];
}
console.log("Se estrajo el primer elemento: "+PrimerElemento([1, 2, 3]));

// Ejercicio 6

function NumeroPar(numero){
        if (numero % 2 == 0) {
            
            return numero+ "= true";
            
        } else{
            return numero+ "= false";
        }
        
    
    }

    console.log(NumeroPar(5));

//Ejercicio 7
function NumeroPar(numero1, numero2){
   
    if (numero1 > numero2) {
        return numero1;
        
    } else{
        return numero2;
    }
}
console.log(NumeroPar(10,5)+"= Es mayor");

//Ejercicio 8
function CadenaPolindroma(Palabra, PalabraPolindroma) {
    console.log(Palabra)
    
    Palabra = Palabra.toLowerCase().replace();
    PalabraPolindroma = Palabra.split('').reverse().join('');
    return  Palabra === PalabraPolindroma;
    
}
console.log(CadenaPolindroma("arroz"));

//Ejercicio 9
function Longitudarreglo(arreglo){
    return arreglo.length;
}
console.log("La suma del arreglo es: "+ Longitudarreglo([1,2,3,4,5]));

//Ejercicio 10
function positivo(num) {
    return num >= 0;
}
console.log("El numero es: "+positivo(10));

//Ejercicio 11
function unircadenas(cadena1, cadena2){
return cadena1+cadena2;
}
console.log(unircadenas("Hola", "Mundo"))

//Ejercicio 12
function UltimoElemento(Arreglo){
    console.log(Arreglo)
    return Arreglo [Arreglo.length -1];
}
console.log("Se estrajo el ultimo elemento: "+PrimerElemento([1, 2, 3]));

//Ejercicio 13
function LetraA (Letra){
    console.log("El texto :"+"("+Letra+")"+" ¿contiene la letra a ?");
    return Letra.includes ("a") || Letra.includes("A");
}
console.log (LetraA ("Agenda la cita"));
console.log (LetraA("estoy en tu moto"));

//Ejercicio 14
var CadenaAnagrama =(cad1,cad2) =>{
    var dato1 = cad1.split("").sort();
    var dato2 = cad2.split("").sort();
    return  dato1.join("") === dato2.join("");
}
dato1= "zorra";
dato2= "arroz";
console.log(dato1 ,"=", dato2)


console.log(CadenaAnagrama(dato1, dato2));

//Ejercicio 15
function SumaArreglo(Sumadatos){
    let Suma = 0;   
    console.log(Sumadatos)
    for(let i = 0; i < Sumadatos.length; i++){ 
        Suma += Sumadatos[i];
    }
    return Suma;
}
console.log(SumaArreglo([10, 10, 10, 10]));

//Ejercicio 16
function NumeroPar(numero1, numero2){
   console.log("["+numero1+","+ numero2+"]")
    if (numero1 < numero2) {
        return numero1;
        
    } else{
        return numero2;
    }
}
console.log(NumeroPar(10,5)+"= Es Menor");

//Ejercicio 17
function cadenaMayusculas (cadena){
   return cadena.toUpperCase();
}
console.log (cadenaMayusculas("Donald"));

//Ejercicio 18
function cadenaminusculas (cadena){
    return cadena.toLowerCase();
 }
 console.log (cadenaminusculas("Donald"));

//Ejercicio 19
function divisible (numD){
   
    if(numD % 3 == 0 && numD % 5 == 0){
        return "El numero :"+numD+" es divisor de 3 y de 5 ?" +" = True";
    }else{
        return "El numero :"+numD+" es divisor de 3 y de 5 ?" +" = False";
    }
    
}
console.log(divisible(45));
console.log(divisible(50));
//Ejercicio 20

function arregloinvertido (arreglo){
    console.log(arreglo);
    return arreglo.slice().reverse();
}
console.log(arregloinvertido([1,2,3,4,5]));

//Ejercicio 22
function numeroMyE (numero){
    if(numero < 0){
        return "El"+"numero: "+numero+" se elevo al cubo :"+ numero ** 3;
    }else{
        return "El"+"numero: "+numero+" se multiplico por 2 :"+ numero * 2;
    }
} 
console.log(numeroMyE(2));
console.log(numeroMyE(-2));

//Ejercicio 23
function arregloinvertido (cad, cadIn){
    console.log(cad);
    cadIn= '';
    for (let i =cad.length -1; i >= 0; i--){
        cadIn += cad[i];
    }
    return cadIn;
}
console.log(arregloinvertido("Donald"));

//Ejercicio 24
function division (a,b,j){
    return div = (a/b);
}
console.log('El resultado es:')
console.log(division(10,20));
//Ejercicio 25
function suma (a,b,j){
    return sum = (a+b)*j;
}
console.log('El resultado es:')
console.log(suma(10,20,2));

//Ejercicio 26
function resultado (x,f,j,m){
    return result = ((x-f)*(j/m));
}
console.log('El resultado es:')
console.log(resultado(10,5,4,2));

//Ejercicio 28
function evaluar(b1, b2, b3){
    return b1 || b2 || b3 ;

}
console.log(evaluar(false , false, true))

//Ejercicio 29

function calculos (dato1, dato2, booleano){
    if (booleano){
        return Math.pow(dato1, dato2);
    }else {
        return Math.sqrt(dato2);
    }
}
console.log(calculos(5, 3, true))
console.log(calculos(5, 3, false))

//Ejercicio 30


//Ejercicio 31

//Ejercicio 32