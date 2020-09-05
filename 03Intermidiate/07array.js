//declaration
//simple way
var arr=[1,2,3,4,5];
//another way
var arr2=new Array("Saurabh","saurabhjum@gmail.com",20,true);
console.log(arr2);//to show full array
console.log(arr2[3]); //to show data at specific index

arr2.push(30);
console.log(arr2);//to add new values at last

arr2.pop();
console.log(arr2);//to remove last element

arr2.unshift("Hi");
console.log(arr2);//to add at first

arr2.shift();
console.log(arr2);//to remove first

console.log(arr2.length);//to show array length

console.log(arr2.indexOf(20));//to find index of element

console.log(Array.from("Saurabh"));//to covert string into an array of chracters