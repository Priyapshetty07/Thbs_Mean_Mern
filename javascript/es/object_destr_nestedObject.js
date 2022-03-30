let userName = {
    name:'Priya',
    age:23,
    phone:9876543210,
    location:{
        current:{
            city:'shimoga',
            pincode:577202,
            area:'ashok nagar'
        },
        permanent:{
            city:"Udupi",
            pincode:567853,
            area:'RNR Nagar'
        }
    }
};

// let{name,age,phone,location} = userName;
// console.log(userName);


//nested code

// let{name, age, phone, location:{current}}=userName;
// console.log(name,age,phone,current);

//  let{name, age, phone, location:{current:{city}}}=userName;
//   console.log(name,age,phone,city);

// let{name, age, phone, location:{current:{city,area}}}=userName;
//   console.log(name,age,phone,city,area);

let{name, age, phone, 
    location:{current:{city:cuurentcity,area}},
    location:{permanent:{city:permanentcity,pincode}} }=userName;

   console.log(name,age,phone,cuurentcity,area,permanentcity,pincode);

