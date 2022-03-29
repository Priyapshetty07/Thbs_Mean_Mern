let thbs = new Promise((resolve, reject) => {
    setTimeout(() => {   //settimeout -- function and 20000
        // resolve('this');
          reject('this');
    }, 20000);
});

//callback function ----//chaining
thbs
    .then((success) => {
        console.log(`resolve---success--callback function of promise ${success}`); //output
    },
        (error) => {
            console.log(`reject--error--callback function of promise ${error}`);
        }
    )

    .then(
        (success1) => {
            console.log(`success1---success chain ${success1}`)
        },
        (error1) => {
            console.log(`error1---error chain ${error1}`)
        }
    )

    .then(
        (success2) => {
            console.log(`success2---success chain ${success2}`)
        },
        (error2) => {
            console.log(`error2---error chain ${error2}`)
        }
    );