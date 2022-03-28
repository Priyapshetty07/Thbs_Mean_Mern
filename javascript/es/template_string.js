//ES5 ---OLD VERSION
let template ='hello\n' + 'welcome\n' + 'to\n' + 'thbs\n';
console.log(template);

// ES6 NEW VERSION
let template1 =
`
hello
welcome
to
thbs`;
console.log(template1);

//..........................ADDING ANY ELEMENT  USING $ ---variable substitution() ${}

let addmsg= 'everyone'; 

//ES5 ---OLD VERSION
let template11 ='hello\n' + 'addmsg\n' +  'welcome\n' + 'to\n' + 'thbs\n';
console.log(template11);

// ES6 NEW VERSION
let template12 =
`
hello
${addmsg}
welcome
to
thbs`;
console.log(template12);

