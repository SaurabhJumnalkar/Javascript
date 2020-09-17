var User=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount; 
    this.getCourseContent=function(){
        console.log(`course count is:${this.courseCount}`);
    };
}
var saurabh=new User("Saurabh",3);    //new keyword
console.log(saurabh);

//prototype
User.prototype.getFirstname=function(){
    return this.firstName;
}
console.log(saurabh.getFirstname());

