//if 
//you'r admin then you got full access
//if sub-admin then only create and delete access
//if user then only read only accesss
var access="admin";
switch (access) {
    case "admin":
        console.log("FULL ACCESS");
        break;
    case "sub-admin":
        console.log("HALF ACCESS");
        break;
     case "user":
             console.log("READ ONLY ACCESS");
             break;
            
    default:
        console.log("Trial user");
        break;
}