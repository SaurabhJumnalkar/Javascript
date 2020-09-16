const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");
const center=document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor);

const BgColor=(select)=>{
    return window.getComputedStyle(select).backgroundColor;
}
console.log(BgColor(pink));

// const color=BgColor(red);


const magicColorChanger=(element)=>{
    const color=BgColor(element);
    return element.addEventListener('mouseenter',()=>{
        center.style.background=color;
    });
}


magicColorChanger(red);
magicColorChanger(cyan);
magicColorChanger(violet);
magicColorChanger(cyan);
magicColorChanger(pink);
magicColorChanger(orange);