// Desafío de código: Predecir funciones

//Predicción 1: Qué indicará console.log cuando se llame a esta función?

function myBirthYearFunc(){
        console.log("Nací en " + 1980);
    }
    myBirthYearFunc("1980")
  //Respuesta: Nací en 1980  



  //Predicción 2:
  function myBirthYearFunc(birthYearInput){
    console.log("Nací en " + birthYearInput);
}
myBirthYearFunc("1980")
  //Respuesta: Nací en 1980  



//Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?

function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 es: " + num1);
        console.log("num2 es: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }
    add(10,20);

//Respuesta:
    // ¡Sumando números!
    // num1 es: 10
    // num2 es: 20
    // 30

    