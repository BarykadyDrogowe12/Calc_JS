"use strict";

function calc() {
    const buttonValue = this.innerText;
    //this.innerText will work instead of target because it's a normal arrow function
    const resPlace = document.querySelector('#res');

    if(buttonValue === "C") {
        resPlace.value = '';
    } else if(buttonValue === "=") {
        resPlace.value = eval(resPlace.value);
        //eval takes the text inside the input and automatically calculates it like 5 * 7 or 2 - 6 + 7
    } else {
        resPlace.value += buttonValue;
        //adds the text that's inside the button tag into the input field
    }
}

const buttons = document.querySelectorAll("button");
//create a collection called buttons

buttons.forEach(element => {
    element.addEventListener('click', calc);
    //callback to function
    //test
})