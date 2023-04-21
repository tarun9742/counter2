let number = 0;
const add = document.getElementById("number");
const text = document.getElementById("text");

function fun1(){
    number += 1;
    text.textContent = "you have clicked me " +  number + " times"
}

function fun2(){
    number *= 0;
    text.textContent = "Click Me Again "
}