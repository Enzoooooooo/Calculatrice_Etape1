class Calculator {
    constructor() {
        this.result = document.getElementById('result');
        this.history = [];
        this.previousExpression = '';
    }

    appendSymbol(symbol) {
        this.result.value += symbol;
        this.history.push(symbol);
    }

    clearResult() {
        this.result.value = '';
        this.history = [];
    }

    calculate() {
        try {
            this.previousExpression = this.result.value;
            this.result.value = eval(this.result.value);
            this.history.push('=');
        } catch (error) {
            this.result.value = 'Error';
        }
    }

    undo() {
        if (this.history.length > 0) {
            const lastAction = this.history.pop();
            if (lastAction === '=') {
                this.result.value = this.previousExpression;
            } else {
                this.result.value = this.result.value.slice(0, -1);
            }
        }
    }
}

const calc = new Calculator();
