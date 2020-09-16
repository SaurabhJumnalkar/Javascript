//slice
const num=[2,3,4,5,6,7,89,0,2];
console.log(num.slice(1,4));//slice cuts the array from mentioned start number and stops at end number index but doesn't include that last number index's value.

//splice

const result=[2,3,4,5,76,7786,45,23];
result.splice(1/*This is start index num */,5/*This is count */,"Hi","HELLO");
console.log(result);