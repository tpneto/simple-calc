
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
