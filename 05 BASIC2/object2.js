var User={
    name:"",
    getUserName:function(){
        console.log(`User name is ${this.name}`);
    }
};
var saurabh=Object.create(User);
console.log(saurabh);
saurabh.name="Saurabh";
saurabh.getUserName();

var sam=Object.create(User,{
    name:{value:"Sammy"}
});

sam.getUserName();