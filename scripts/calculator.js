import '../scss/calculator.scss';

function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'Error';
    }
}

document.querySelectorAll('.btn').forEach(e => {
    e.addEventListener('click', (event) => {
        const value = event.target.value;
        if (value === 'C') {
            clearResult();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendValue(value);
        }
    });
});


