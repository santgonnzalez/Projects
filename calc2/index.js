const txtOp1 = document.getElementById('op1');
const txtOperacion = document.getElementById('operacion');
const txtOp2 = document.getElementById('op2');
const botonCalcular = document.getElementById('calcular');
const pResult = document.getElementById('resultado') ;


botonCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);



    if((operacion == "+" || operacion == "-" || operacion == '*' ||
    operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operacion){
            case '+': resultado = op1 + op2;
            break;
            case '-': resultado = op1 - op2;
            break;
            case '*': resultado = op1 * op2;
            break;
            case '/': resultado = op1 / op2;
            break;
        }
        pResult.style = 'color:blue'
        pResult.innerText = "= " + resultado;
    }else{
        pResult.style = 'color:red'
        pResult.innerText= "Calculo imposible";
    }
}