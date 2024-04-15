let display = document.querySelector('.display');
let numbers = [];
let operator = '';

const appendNumber = (number) => {
    if (number === 'clear') {
        numbers = [];
        operator = '';
        display.value = '';
        return;
    }

    if (number === 'delete') {
        numbers = numbers.slice(0, numbers.length - 1);
        display.value = numbers.join('');
        return;
    }

    if (number === '=') {
        try {
            let result = eval(numbers.join(''));
            display.value = result;
            numbers = [result];
        } catch (error) {
            display.value = 'Error';
        }
        return;
    }

    numbers.push(number);
    display.value = numbers.join('');
}
