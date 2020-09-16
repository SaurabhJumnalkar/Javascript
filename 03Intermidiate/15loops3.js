//for of is used for arrays
var arr=["apple","pixle","oneplus","redmi","motorola"];

for(const n of arr){
    console.log(n);
}

//for in used for objects

var arr1={a:"apple"
,p:"pixle",o:"oneplus",r:"redmi",m:"motorola"};


for(const n in arr1){
    console.log(`key is: ${n} and value is: ${arr1[n]}`);
}