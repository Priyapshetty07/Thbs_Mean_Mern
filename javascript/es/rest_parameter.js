//aggregation of remaining arguments into single parameter of variable function
function restPar(a,b,c,...x) 
{
    console.log(x);
    console.log(x.length);
    return(a+b+c)
}
restPar('hello','everyone','welcome','to',99,'batch','THBS');