    let result = document.getElementById('result');

    function appendSymbol(symbol) {
        result.value += symbol;
    }

    function clearResult() {
        result.value = '';
    }

    function calculate() {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    }
