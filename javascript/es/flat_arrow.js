//regular function //this keyword worked
let obj = {
    name: "priya",
    later: function() {
        console.log(this)
console.log(this.getaddress());
console.log(`$(this.name}`);
    },
getaddress: function() {
    return "shimoga";
}
};

obj.later();

//flat arrow function //this keyword not worked here
let obj1 = {
    name: "priya",
    later:() => {
        console.log(this)
console.log(this.getaddress());
console.log(`$(this.name}`);
    },
getaddress: function() {
    return "shimoga";
}
};

obj1.later();
