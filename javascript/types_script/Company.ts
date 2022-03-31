class Company{
    cmpName ="";
    location="";
    

constructor(cmpName,location) //constructor
{
    this.cmpName = cmpName;
    this.location = location;
    
}

it(){ //method
    return `${this.cmpName} ${this.location}`;
}

domain(){ //method
    return `${this.cmpName} ${this.location}`;
}

}

let thbs =new Company('THBS','BANGLORE'); 
let cmp11 = thbs.it();
console.log(cmp11);

let thiss =new Company('THIS','DUBAI');
let cmp22 = thiss.domain();
console.log(cmp22);
