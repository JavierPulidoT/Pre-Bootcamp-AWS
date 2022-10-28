//Desafío de código: Loop-d-loop

/*Crea un nuevo bucle en el que el corredor solo reciba un caramelo cada 3 kilómetros 
Y si se desplaza a más de 9 kilómetros por hora.*/

var i=0;
var v=1;
var velocidad=10;
var cont=1;

do{
v++;
    if (velocidad > 9){               // si su velocidad es mayor a 9km/h , se cumple lo de mas
        for(i = 0; i < 3; i++){       // cada 3 km
          
            console.log("Kilometro",cont);
            cont++;
       }   
       if (cont > 3){                   // Al complir los 3km en el ciclo for, se da un caramelo
        console.log("Caramelo!🍬");
       }
   }
}while(v<5);



//Javier Pulido
   
