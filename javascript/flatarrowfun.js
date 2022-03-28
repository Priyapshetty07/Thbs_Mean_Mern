function addNumber(n1 ,n2){
    return n1 + n2;
}

console.log(add1 = addNumber(15, 5));  //20

//----------or-------------using flat arrow function

let addNumber1 = (n1 , n2) => n1+n2;

console.log(addNumber1(15,5));  //20

//--------------------------------------------------------------------------

let additems = a => a +50;  //a+50 = 10 + 50
console.log(additems(10));  ///60

//-----------------arrow function without return type--------------------------------------------------

let names=(a,b)=>a + 07;
console.log(names(03));  //10

///or  --------------------arrow function with return type

let names1= (a,b) => { return a + 07}
console.log(names1(03)); //10