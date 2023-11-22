let numbers = [3, 2, 1];
let result = numbers.map(function(number, index, array) {
    if (index === array.length - 1) {
        return number;
    } else {
        return number + ' больше, чем ';
    }
}).join('');

function printAnswer()
{
    document.getElementById("Answer").textContent = result;
}