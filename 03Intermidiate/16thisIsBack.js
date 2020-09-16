//this
//The regular function call always points to global object.

console.log(this);
var user={
    name:"ssj",
    rollNo:337,
    sayHello:function(){
        console.log("line 9: Hello");
        console.log("line 10",this);
        function hi(){
            console.log("line 12: Hi");
            console.log("line 13",this);
        }
        hi();  //regular function call
    }
}
user.sayHello(); //object reference function call
//for clear understanding run above code on browser console