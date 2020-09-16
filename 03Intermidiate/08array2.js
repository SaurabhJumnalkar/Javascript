//simple function
function isEven(num) {
    if(num%2===0){
        return true;
    }
    return false;
}
console.log(isEven(2));

//arrow function with minimum code
var isEven2=(num2)=>{
    return num2%2===0;
}
console.log(isEven2(3));

//callback function to check whether all array elements are even
var result=[2,4,6,8].every((e)=>{return e%2===0;});
console.log(result);

//same above code with minimum code
var result1=[2,3,6,8].every((e)=> (e%2===0));
console.log(result1);
