//find and display discount
var actualPrice=799;
var sellingPrice=199;
var discountPercentage=(actualPrice-sellingPrice)/actualPrice*100;
console.log("Discount is"+discountPercentage);                //actual calculated result
var displayDiscountPercentage=Math.round(discountPercentage);
console.log("Discount is"+displayDiscountPercentage+"% off");  //rounded off result