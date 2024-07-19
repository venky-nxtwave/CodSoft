const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDispaly() {
    display.value = ""
}

function clearOne() {
    display.value = display.value.toString().slice(0, -1)
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}