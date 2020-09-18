//import User from "./class";
const User = require("./class");

const saurabh = new User("saurabh", "saurabhjum@gmail.com");

console.log(saurabh.getInfo());

saurabh.enrollCourse("c");
saurabh.enrollCourse("cpp");
saurabh.enrollCourse("python");

let courses = saurabh.getCourseList();
console.log(courses.length);