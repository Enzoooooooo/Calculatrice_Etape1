class Calculator {

    sendValidEvent(timeTaken) {
        fetch('http://localhost:3000/calculator-events/valid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ timeTaken }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Valid event:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    sendInvalidEvent() {
        fetch('http://localhost:3000/calculator-events/invalid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Invalid event:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


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
        const startTime = Date.now();
        try {
            this.previousExpression = this.result.value;
            this.result.value = eval(this.result.value);
            this.history.push('=');

            const timeTaken = Date.now() - startTime;
            this.sendValidEvent(timeTaken);
        } catch (error) {
            this.result.value = 'Error';
            this.sendInvalidEvent();
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
