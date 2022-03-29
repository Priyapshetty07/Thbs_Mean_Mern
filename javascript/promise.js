let thbs = new Promise((resolve, reject) => {
     setTimeout(() => {   //settimeout -- function and 20000
        //  resolve('this');
        //  reject('this');
     },20000);
});

//callback function 
thbs
    .then((success) => {
         console.log(`resolve---success--callback function of promise ${success}`); //output
},
(error) => {
    console.log(`reject--error--callback function of promise ${error}`);
});



