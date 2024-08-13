let weight = 0.00;

function updateDisplay() {
    document.getElementById('weight-display').innerText = weight.toFixed(2);
}

function increaseWeight() {
    weight += 0.10;
    updateDisplay();
}

function decreaseWeight() {
    if (weight > 0) {
        weight -= 0.10;
    }
    updateDisplay();
}

function resetWeight() {
    weight = 0.00;
    updateDisplay();
}