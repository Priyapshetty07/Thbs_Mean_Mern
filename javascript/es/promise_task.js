let thbs = new Promise((resolve, reject) => {
    setTimeout(() => {   
        resolve('js');
    },1000);
});

//callback function 
thbs
   .then((success) => {
        console.log(`finally learned promised ${success}`); //output
},
(error) => {
   console.log(`reject callback function of promise ${error}`);
});

