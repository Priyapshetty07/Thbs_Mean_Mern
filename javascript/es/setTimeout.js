//regular function
let obj = {
    name:"thbs",
    later: function(){
        console.log(this); //calling object
                                      
        //function calling 2 parameters--function and 10000
        setTimeout( function(){
            console.log(this); //window
            let myname ="shimoga";
            console.log('this is inside settimeout')
            console.log(`i am inside settimeout  ${myname}`);

        },10000);
    }
};
obj.later();

//flat arrow function
let obj1={
        name:"thbs",
        later:function(){
            console.log(this);

            setTimeout( () => { //flat arrow 
                console.log(this); //window
                let myname ="shimoga";
            console.log('this is inside settimeout')
            console.log(`i am inside settimeout  ${myname}`);
        
            },10000);
        }
};
obj1.later();