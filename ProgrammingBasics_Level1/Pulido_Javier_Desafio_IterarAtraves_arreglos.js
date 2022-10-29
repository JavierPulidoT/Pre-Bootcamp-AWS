//Desafío de código: Iterar a través de arreglos

// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

//--------------------------------------------------------------------------------------------
//1. Escribe un bucle for que recorra un arreglo de números e imprima cada número.

// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];

for(i=0 ; i<arr1.length; i++){
console.log(arr1[i]);
}
Salida:  8,6,7,5,3,0,9
//--------------------------------------------------------------------------------------------

//2. Escribe un ciclo for que recorra un arreglo de números e imprima la suma del número y el índice del número en el arreglo.

// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];

i_mayor = 0;
n_mayor = 0;
sum = 0;

for (i = 1; i< arr2.length ; i++) {
    if (arr2[i] > arr2[i_mayor]) {
        i_mayor = i;
    }
}
n_mayor  = arr2[i_mayor];
console.log("El mayor es: " + n_mayor + " y se encuentra en el índice " + i_mayor)
sum = n_mayor + i_mayor;
console.log("La suma del número y el índice del número en el arreglo es = " ,sum);

//Salida
// El mayor es: 37 y se encuentra en el índice 5
// La suma del número y el índice del número en el arreglo es =  42

//--------------------------------------------------------------------------------------------

//3. Escribe un bucle for que recorra un arreglo de números e imprima SOLO los números mayores a 5.
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

var n = 5;

resultado = [] //Aquí guardo los números del resultado de validar la condición.

//for (i in arr3) {
    for (i = 0 ; i<arr3.length; i++) {
      if (i > n) {// condición
          resultado.push(i);//se agrega el número al array resultado.
      }
}   

console.log("Los Numeros mayores a "+n, "son = ", resultado);

//salida : Los Numeros mayores a 5 son =  [ 6,12,14 ]




//Javier Pulido...