//here if user is authenticated then we will show signout button else show login/signup button
var authenticated=true;

//simple way
if(authenticated){
    console.log("sign out");
}else{
    console.log("LOgin in");
}


//using ternary operator
authenticated?console.log("sign out"):console.log("LOgin in");
