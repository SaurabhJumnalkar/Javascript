//function calling
function name(){
    console.log("HELLO");
}
name();

//function calling with parameters
function name2(num){
console.log(`My age is ${num}`);
}
name2(20);

//function with return
function name3(num2) {
    return `My roll no. is ${num2}`;
}
var roll=name3(337);
console.log(roll);

//function with return in log
console.log(name3(338));