//falsy values
// undefined
// null
// 0
// ''
// NaN

var user1='';
if(user1){
    console.log("Its truthy values");
}
//apart from above values all are truthy values
var user2='hi';
if(user2){
    console.log("Its truthy values");
}

//coercion
var user3="2";
if(2==user3){
    console.log("Hello");
}//condition is true

var user4="2";
if(2===user4){
    console.log("This is with 3equal signs");
}