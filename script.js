// Creating an array to store our data equations
let dataArray = [];
let resultScreen = document.querySelector(".result");
let calcButtons = document.querySelectorAll("button");
let equation;
const calculate = (button) => {
    let value = button.textContent;
    if (value === 'DEL') {
        dataArray = [];
        resultScreen.textContent = '';
    } else if (value === "=") {
        resultScreen.textContent = eval(equation);
    }
    else {
        dataArray.push(value);
        equation = dataArray.join('');
        resultScreen.textContent = equation;
    }

}

calcButtons.forEach(button => button.addEventListener("click", () => calculate(button)));

