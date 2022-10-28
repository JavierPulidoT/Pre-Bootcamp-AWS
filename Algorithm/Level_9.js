//----------------------------- Level 9-------------------------------

//Activity 1
var number = " ";
var x = 5;

while (x < 10) {
  number += x;
  x++;
}
console.log(number);
Answer: 56789

//Activity 2
var count = 1;

while (count < 5) {
  console.log("Dojo");

  count++;
}
Answer: Dojo,Dojo,Dojo,Dojo

//Activity 3
var x = 1;
var y = 48;

while (x < 100) {
  if (x == y) {
    break;
  }

  x++;
}
console.log(x);
Answer: 48

//Activity 4
var message = "Coding";
var x = 1;

while (x < 100) {
  x++;
}
console.log(message);
Answer: Coding

//Activity 5
var x = 7;
var message = "boom";

while (x > message.length) {
  console.log(message + x);
  x--;
}
Answer: boom7,boom6,boom5
