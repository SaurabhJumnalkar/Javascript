//fill
const num=[1,2,3,4,5,6,7,8,9];
num.fill("hi"/*The value which you want to fill */,2/*Start index */,5/*End index */);
console.log(num);

//filter
arr=[24,76,43,67,45,97,34];
var result=arr.filter((e)=>(e<68));//all elements which are less than 68 in array are stored in result array.
console.log(result);