var myMap = new Map();
myMap.set(1, "Single");
myMap.set(2, "double");
myMap.set(3, "Triple");
myMap.set(4, "quatral");
console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
}
///for of gives key first
for (let [key, value] of myMap) {
  console.log(`Key is ${key} and value is ${value}`);
}
///foreach always gives first value
myMap.forEach((v, k) => {
  console.log(`${v} and key is ${k}`);
});

myMap.delete(2);
console.log(myMap);