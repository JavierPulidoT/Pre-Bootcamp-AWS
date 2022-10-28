//---------------------------Level 5--------------------------

//Activity 1
for(var i=0; i<10; i++)
{
    console.log(i);
}
Answere = 0,1,2,3,4,5,6,7,8,9

//Activity 2
var x =1;
for(var i=0; i<3; i++)
{
    x = x+1;
}
console.log(x);
Answere = 4

//Activity 3
var x = 1;
for(var i=0; i<3; i=i+2)
{
    x =x+1;
}
console.log(x);
console.log(i);
Answere = 3,4

//Activity 4
var x = 1;
for(var i=0; i<-1; i=i+2)
{
    x = x+1;
}
console.log(x);
Answere = 1

//Activity 5
var x = [];
for(var i=0; i<10; i++)
{
    x.push(i*2);
}
console.log(x);
Answere = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

//Activity 6
var x = [1,3,5,8];

for(var i=0; i<x.length; i++)
{

    if(x[i] > 4)
    {
        x[i] = 0;
    }

}
console.log(x);
Answere = [1, 3, 0, 0]

//Activity 7
var x = [-1,3,2,7];

for(var i=0; i<x.length; i++)

{

if(x[i] < i)
{
    x[i] = -10;
}

}
console.log(x);
Answere = [-10, 3, 2, 7]

//Activity 8
for(var i=20; i!=10; i--)
{
    console.log(i);
}
Answere = 20,19,18,17,16,15,14,13,12,11

//Activity 9
var x = 0;

for(var i=1; i<4; i++)
{
    x=x+i;
    console.log(x);
    console.log(i);
}
Answere = 1,1,3,2,6,3

//Activity 10
var x = 0;
for(var i=1; i<4; i=i+2)
{
    x=x+i;
    console.log(x);
    console.log(i);
}
Answere = 1,1,4,3

