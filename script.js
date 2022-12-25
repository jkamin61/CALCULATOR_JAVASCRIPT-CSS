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
        if (resultScreen.textContent.length === 17) {
            alert("Sorry, that's too many digits!");
            dataArray = [];
            resultScreen.textContent = '';
        }
    }

}

calcButtons.forEach(button => button.addEventListener("click", () => calculate(button)));

