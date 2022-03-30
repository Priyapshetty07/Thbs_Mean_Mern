//for loop-tradiatinal for loop inside js

let arr = ['welcome','to','THBS','batch',99];

//for loop
for(let i=0; i<arr.length; i++)
{
    console.log(`For Loop ${i} after iteration add "${arr[i]}"`);
}

//using for each method

console.log(`using for each method`);

arr.forEach((Element,index,Array) => {
    console.log(`For each ${index} after iteration add "${Element}--> "${Array}"`);
});

