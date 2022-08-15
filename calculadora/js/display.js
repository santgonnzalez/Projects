class Display {
    constructor(displayPastValue,displayActualValue){
        this.displayActualValue = displayActualValue;
        this.displayPastValue = displayPastValue;
        this.calculador = new Calculadora();
        this.typeOperation = undefined;
        this.actualValue = '';
        this.pastValue = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.actualValue = "";
        this.pastValue = "";
        this.typeOperation = undefined;
        this.printValues();
    }

    computar(tipo) {
        this.typeOperation !== "igual" && this.calcular();
        this.typeOperation = tipo;
        this.pastValue = this.actualValue || this.pastValue;
        this.actualValue = "";
        this.printValues();
    }

    newNum(num) {
        if(num === "." && this.actualValue.includes(".")) return
        this.actualValue = this.actualValue.toString() + num.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayPastValue.textContent = `${this.pastValue} ${this.signos[this.typeOperation] || ''}`;
    }

    calcular() {
        const pastValue = parseFloat(this.pastValue);
        const actualValue = parseFloat(this.actualValue);

        if( isNaN(actualValue)  || isNaN(pastValue) ) return
        this.actualValue = this.calculador[this.typeOperation](pastValue, actualValue);
    }

}