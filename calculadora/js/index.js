const displayPastValue = document.getElementById("past-value");
const displayActualValue = document.getElementById("actual-value");

const numbersBotton = document.querySelectorAll(".num");
const OperadoresBotton = document.querySelectorAll(".operador");

const display = new Display(displayActualValue, displayPastValue);

numbersBotton.forEach(boton => {
    boton.addEventListener('click', () => display.newNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
})