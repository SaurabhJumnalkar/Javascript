// //two types of context
// 1.Global context:It wraps all code. 
// 2.Execution context:It comes when execution process comes and after executing it goes.

//tip:
//functions are scanned and made available.
//variables are scanned and made undefined.

//about global context
myName();
function myName(){
    console.log("Hello I am Saurabh");
}//works fine


myName2();//this line
var myName2=function(){
    console.log("Helllo I am Saurabh Jumnalkar");
}//It throw an error as per tip function is now a variable so it becomes undefined
//If you want to run code then above line"this line"cut paste here


//execution context:
//variable object,scope chain,this

//variable object(little idea)
var name="SSJ";
function myName3(){
    var name="Saurabh";
    console.log(name);
}
console.log(name);
//2 different output comes here as both have different scopes.