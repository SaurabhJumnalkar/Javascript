const myUser = {
  name: "Saurabh",
  courseCount: 5,
  role: "admin",
};
console.log(myUser.courseCount);
const {name,courseCount,role}=myUser;
console.log(courseCount);
//Destructure should have same name and same datatype  