let isCelsiusInput = true;

document.getElementById('calculate').addEventListener('click', function() {
    const inputBox = document.getElementById('input');
    const outputBox = document.getElementById('output');
    const calculationArea = document.getElementById('calculation');
    const temperature = parseFloat(inputBox.value);

    if (!isNaN(temperature)) {
        if (isCelsiusInput) {
            const fahrenheit = (temperature * 9/5) + 32;
            outputBox.value = fahrenheit.toFixed(2);
            calculationArea.value = `Fahrenheit = (${temperature} * 9/5) + 32
Fahrenheit = ${fahrenheit.toFixed(2)}°F`;
        } else {
            const celsius = (temperature - 32) * 5/9;
            outputBox.value = celsius.toFixed(2);
            calculationArea.value = `Celsius = (${temperature} - 32) * 5/9
Celsius = ${celsius.toFixed(2)}°C`;
        }
    } else {
        outputBox.value = '';
        calculationArea.value = '';
        alert('Please enter a valid number for temperature.');
    }
});

document.getElementById('reverse').addEventListener('click', function() {
    isCelsiusInput = !isCelsiusInput;
    const inputBox = document.getElementById('input');
    const outputBox = document.getElementById('output');
    const inputLabel = document.querySelector('label[for="input"]');
    const outputLabel = document.querySelector('label[for="output"]');
    const calculationArea = document.getElementById('calculation');

    inputBox.value = '';
    outputBox.value = '';
    calculationArea.value = '';

    if (isCelsiusInput) {
        inputBox.placeholder = 'Enter temperature in Celsius';
        inputLabel.innerText = 'Celsius:';
        outputLabel.innerText = 'Fahrenheit:';
    } else {
        inputBox.placeholder = 'Enter temperature in Fahrenheit';
        inputLabel.innerText = 'Fahrenheit:';
        outputLabel.innerText = 'Celsius:';
    }
});
