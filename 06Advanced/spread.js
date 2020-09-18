function sumOne(a, b) {
  return a + b;
}
var myA = [5, 4];
console.log(sumOne(...myA)); //spread operator divides into pieces

function sumTwo(...args) { //rest operator bunch all into an array
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumTwo(2,1,5,7,8,4));