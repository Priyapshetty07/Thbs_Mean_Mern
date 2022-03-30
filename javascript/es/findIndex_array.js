const findIdx = [1,20,70,40,50,8,60,12];
const inx = findIdx.findIndex((element, index) => {
    console.log(element, index)
    return element > 50; 
});
console.log(`element index is --> ${inx}`);