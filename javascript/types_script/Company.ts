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

// let thbs =new Company('THBS','BANGLORE'); 
// let cmp11 = thbs.it();
// console.log(cmp11);

// let thiss =new Company('THIS','DUBAI');
// let cmp22 = thiss.domain();
// console.log(cmp22);

class Employee extends Company{
    empName;
    empID;

    constructor(cmpName, location,empID, empName){
        super(cmpName,location);
        this.empName= empName;
        this.empID=empID;
    }


    domain(){ //method  overriding method of parent
        return `${super.domain()} and i am employee ${this.empName} ${this.empID}`;
    }

    project(){
        return `${this.empName} ${this.empID} is from Employee class(child)`;
    }


}

let thbs = new Employee('THBS','BANGLORE','PRIYA',3364);
 let cmp11 = thbs.domain();
 console.log(cmp11);
 let cmp22 = thbs.project();
 console.log(cmp22);


 