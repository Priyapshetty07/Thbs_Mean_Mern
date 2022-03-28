let letterA = 'a';
let letterB = 'b';

if(letterA == letterB)
{
    console.log('a and b are equal');
}
else{
    console.log('a and b are  not equal');    //output
}

//

let letterA1 = 'a';
let letterB1 = 'a';

if(letterA1 == letterB1)
{
    console.log('A and B are equal'); //output
}
else{
    console.log('A and B are  not equal');
}

//

let letterA2 = '10'; //difft datatype
let letterB2 = 10;   //difft datatypes

if(letterA2 == letterB2) // = = check only the value
{
    console.log('A and B are equal'); //output
}
else{
    console.log('A and B are  not equal');
}

//
let letterA3 = '10'; //difft datatype-spring
let letterB3 = 10;   //difft datatypes-number

if(letterA3 === letterB2) // = = = check both the value and datatypes
{
    console.log('A and B are equal');
}
else{
    console.log('A and B are  not equal'); //output
}