function addnumber(funArg){
    console.log('inside number function')

    let myobj = funArg();
    console.log(myobj);
    return 10 + 20;
}

function sayHello(){
    return  'welcome to thbs';
}

addnumber(sayHello);