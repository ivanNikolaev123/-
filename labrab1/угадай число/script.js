let x=5;
let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
function game(){
let num2 = parseFloat(document.getElementById("num2").value);
let CountElement = document.getElementById("count");
let ColdElement = document.getElementById("Cold");
let resultElement = document.getElementById("result");
if (isNaN(num2)) {
    ColdElement.textContent='Введите корректные данные';
    return;
}
x=x-1;
CountElement.textContent = x;
if (num1==num2)
    if (x!==0)
        {resultElement.textContent = "Вы выиграли";
        ColdElement.textContent = "";}
    else
        {resultElement.textContent = "Вы проиграли";
        ColdElement.textContent = "";}
else
    {if (num1>num2) ColdElement.textContent = "Загаданное число больше";
    else ColdElement.textContent = "Загаданное число меньше";
    CountElement.textContent = x;}
}

function repeat(){
x=5;
let num2 = parseFloat(document.getElementById("num2").value);
let CountElement = document.getElementById("count");
let ColdElement = document.getElementById("Cold");
let resultElement = document.getElementById("result");
CountElement.textContent = 5;
resultElement.textContent = "";
ColdElement.textContent ="";
}