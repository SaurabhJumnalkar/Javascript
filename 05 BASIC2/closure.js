function init(){
    var name="saurabh";
    console.log(name);
    
    function getname(){
        console.log(name);
    }
    return getname;
}
var value=init();
value();

//another example
function doAdd(x){
    return function(y){
        return x+y;
    }
}
var sum=doAdd(4);
console.log(sum(5));
//above we can do in a diffrent technique
//By curring
console.log(doAdd(10)(5));//double paranthesis
