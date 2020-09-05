// sayHello();
// function sayHello(){
//     console.log("Hello");
// }
//in this above code function is declaraed and defined after calling as per c but in javascript there is a global context due to which it runs the code
//there is global context named window which is used in writing in console
//But it is not necessary to have same name everywhere 

myName="Saurabh";
if(myName==window.myName){
    console.log(myName);
}//here on running this code it throw an error as node not contain window 