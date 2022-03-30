let array1 = [10,20,30,40,50,60,70,80];
let findmethods = array1.find((element,index) => {
    console.log(element,index);
    return element > 40;
});
console.log(`using find methods greater than 40 `);
console.log(findmethods);