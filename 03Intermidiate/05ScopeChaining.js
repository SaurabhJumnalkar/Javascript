var name="Saurabh Jumnalkar";
console.log(name);

function myName(){
    var name="SSJ";
    console.log(name);

    myName2();
    
    function myName2(){
        console.log(name);
    }
}
myName();