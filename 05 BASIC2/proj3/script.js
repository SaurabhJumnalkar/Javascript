const courses = [
  {
    name: "complete Reactjs course",
    price: "2.3",
  },
  {
    name: "complete Angularjs course",
    price: "2.0",
  },
  {
    name: "complete MERN course",
    price: "2.8",
  },
  {
    name: "complete C++ course",
    price: "3.0",
  },
];

function generateLIST() {
  const ul = document.querySelector(".list-group");
 ul.innerHTML="";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ "+course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
// generateLIST();
window.addEventListener("load",generateLIST);
//sorting button in lower to higher
const button=document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price-b.price)
    generateLIST();
});

//sorting button from higher to lower
const button2=document.querySelector(".btn-primary")
button2.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price-a.price)
    generateLIST();
});
