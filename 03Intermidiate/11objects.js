var iphone={
    username: "Saurabh",
    modelName:"iphone 11 pro max",
    price:90000,
    isLoggedFromFacebook:true
};
//two different ways to show o/p
console.log(iphone.modelName);
console.log(iphone["username"]);

iphone.price=88000;
console.log(iphone.price);

console.table(iphone);//table