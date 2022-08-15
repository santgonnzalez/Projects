const displayPastValue = document.getElementById("past-value");
const displayActualValue = document.getElementById("actual-value");

const numbersBotton = document.querySelectorAll(".num");
const OperadoresBotton = document.querySelectorAll(".operador");

const display = new Display(displayPastValue,displayActualValue);

numbersBotton.forEach(boton => {
    boton.addEventListener('click', () => display.newNum(boton.innerHTML));
});

OperadoresBotton.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

