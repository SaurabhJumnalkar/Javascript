
let count=1;

setInterval(()=>{
    if(count<1000){
        count++;
    document.getElementsByClassName("counter")[0].innerHTML=count;
    }
    
},1)

setTimeout(()=>{
    document.getElementsByClassName("followers")[0].innerHTML="HURRAY!";
},4000)