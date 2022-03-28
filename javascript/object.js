let personinfo = {  //object decalration and assign
    fname: 'priya',
    lname: 'shetty',
    phone: 9876543210,
    'age above':23,
    address:{
        presentAddress:{
            location:'shimoga',
            pincode:577201  //577202
            //area:''ashok nagara'
        },
        premantAddress:{
            location:'Udupi', //manipal
            pincode:56708
             
        }
    }
};
//get the value
console.log(personinfo); //getting all the details
console.log(personinfo.lname); //getting last name
console.log(personinfo["age above"]); //getting age

// console.log(personinfo.age above); //getting error

console.log(personinfo.address); //getting address both present and premant
console.log(personinfo.address.premantAddress.pincode); 

//update
console.log(personinfo.phone=9123456780);  //phone number update
console.log(personinfo.address.presentAddress.pincode=577202); //pincode update
console.log(personinfo.address.premantAddress.location='manipal'); //location update

//adding 

console.log(personinfo.address.presentAddress.arear="ashok nagar"); //adding area to present address
console.log(personinfo);

