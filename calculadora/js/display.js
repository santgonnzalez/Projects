class Display {
    constructor(displayActualValue, displayPastValue){
        this.displayActualValue = displayActualValue;
        this.displayPastValue = displayPastValue;
        this.calculadora = new Calculadora();
        this.typeOperation = undefined;
        this.actualValue = "";
        this.pastValue = "";
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

    computar(type) {
        this.typeOperation !== "igual" && this.calcular();
        this.typeOperation = type;
        this.pastValue = this.actualValue || this.pastValue;
        this.actualValue = "";
        this.printValues();
    }

    newNumero(num) {
        if(num === "." && this.actualValue.includes(".")) return
        this.actualValue = this.actualValue.toString() + num.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayPastValue.textContent = this.pastValue;
    }

    calcular() {
        const pastValue = parseFloat(this.pastValue);
        const actualValue = parseFloat(this.actualValue);

        if ( isNan(actualValue) ||  isNan(pastValue)) return
        this.actualValue = this.Calculadora[this.typeOperation](pastValue, actualValue);
    }

}