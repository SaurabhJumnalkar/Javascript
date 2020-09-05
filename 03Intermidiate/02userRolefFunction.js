//if 
//you'r admin then you got full access
//if sub-admin then only create and delete access
//if user then only read only accesss
function userRoleFunction(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin and he got full access`;
        case "sub-admin":
            return `${name} is sub-admin and he got access of create and delete the data`;
            case "user":
                return `${name} is user and he got read-only access`;
    
        default:
        return `${name} is a trial user`
    }   
}
var display=userRoleFunction("saurabh","sub-admin");
console.log(display);

//we can write above function in this manner also by declaring it as variable only here i changed name of function for no repetation
var userRoleFunction1=function(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin and he got full access`;
        case "sub-admin":
            return `${name} is sub-admin and he got access of create and delete the data`;
            case "user":
                return `${name} is user and he got read-only access`;
    
        default:
        return `${name} is a trial user`
    }   
}
console.log(userRoleFunction1("SSJ","admin"));