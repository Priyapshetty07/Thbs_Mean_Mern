
let hobbies = [
    {name:'Priya', skills:['driving','reading','painting','riding','danceing'] },
    {name:'Shubagini', skills:['reading','painting','danceing','cooking'] },
    {name:'Chaitali', skills:['cooking','danceing','painting'] },
    {name:'shashank', skills:['driving','riding'] },
    {name:'chethan', skills:['riding'] }
];

let mappedHobbies = hobbies.map((val,index,array) =>{
    val.name ="Mrs/Mr" + val.name; //modifed values
    return val;
});
console.log(hobbies); //output will change in map methods
console.log(`----------------used mapped methods---------------------------`)
console.log(mappedHobbies);