
let hobbies = [
    {name:'priya', skills:['driving','reading','painting','rideing','danceing'] },
    {name:'shubagini', skills:['reading','painting','danceing','cooking'] },
    {name:'chaitali', skills:['cooking','danceing','painting'] },
    {name:'shashank', skills:['driving','rideing'] },
    {name:'chethan', skills:['rideing'] }
];

let mappedHobbies = hobbies.map((val,index,array) =>{
    val.name ="Mrs/Mr" + val.name; //modifed values
    return val;
});
console.log(hobbies); //output will change in map methods
console.log(`----------------used mapped methods---------------------------`)
console.log(mappedHobbies);