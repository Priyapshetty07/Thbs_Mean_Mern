//filter element base on condition

let numlist = [10,20,30,40,50,60,70];

let elements = numlist.filter((val,index,Array) => {

    console.log(val,index,Array);
    return val > 30;

});
console.log('greater than 30 elements are:')
console.log(elements);

//filter array of object

let hobbies = [
    {name:'priya', skills:['driving','reading','painting','rideing','danceing'] },
    {name:'shubagini', skills:['reading','painting','danceing','cooking'] },
    {name:'chaitali', skills:['cooking','danceing','painting'] },
    {name:'shashank', skills:['driving','rideing'] },
    {name:'chethan', skills:['rideing'] }
];

let filterhobbies = hobbies.filter((val,index,array) =>{
    console.log(val);
    // return val.name.startsWith('s')
    return val.skills.includes('driving');
});
console.log("filter result");
console.log(filterhobbies);