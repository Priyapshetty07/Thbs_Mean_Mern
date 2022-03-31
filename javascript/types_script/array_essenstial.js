let msg =['good','morning','everyone','welcome','to'];
//push
console.log("----------push method--------------");

msg.push('thbs');
console.log(`thbs added to : ${msg}`);

msg.push('priya','shetty');
console.log(`priya and shetty added to :${msg}`);


//pop

console.log("--------------pop method-----------------");
msg.pop();
console.log(`removing the last element (shetty) : ${msg}`);

//unshift
console.log("--------------unshift----------------------");
msg.unshift('hello');
console.log(`adding element- start of the array(hello) : ${msg}`);

msg.unshift('this','company');
console.log(`adding 2 element -start of the array(this and company) : ${msg}`)

//shift
console.log("-------------------------shift-------------------------");
msg.shift('this');
console.log(`removing the first element of the array(this): ${msg}`)

