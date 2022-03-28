let contactList = [];  //declear of empty array
console.log(typeof contactList) //object
console.log(contactList);


let contact = new Array(10); //declar array with new keyword
console.log(contact);

contact = ['priya',07,true,'hello']; //initization or assing value to array
console.log(contact);
console.log(contact[1]);


let classlist=['99th','07','thbs']; //accessing value from array
console.log(classlist);

console.log(classlist[2]);

console.log(classlist["2"]); //index as string qutos 

classlist[0]=[100];
console.log(classlist[0]); //updating 99 to 100

classlist[2]="THIS";
console.log(classlist[2]);
console.log(classlist);
