const findIdx = [10,20,70,40,50,8,9,12];
const inx = findIdx.findIndex((element, index) => {
    console.log(element, index)
    return element > 50; 
});
console.log(`element index is --> ${inx}`);