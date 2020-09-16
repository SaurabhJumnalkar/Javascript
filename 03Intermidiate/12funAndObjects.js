var iphone={
    username: "Saurabh",
    modelName:"iphone 11 pro max",
    price:90000,
    isLoggedFromFacebook:true,
    accountList:[],
    numOfAccount:function(){
        return `${this.username} is stored ${this.accountList.length} Accounts in iphone`;
    },
    getAccount:function(AccountName){
        this.accountList.push(AccountName);
    }
};

console.log(iphone.numOfAccount());
iphone.getAccount("Google");
iphone.getAccount("LinkedIn");
console.log(iphone.numOfAccount());
