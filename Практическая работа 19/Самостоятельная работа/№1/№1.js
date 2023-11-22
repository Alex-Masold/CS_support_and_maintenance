let arr = [];
function printAnswer()
{
    let str = document.getElementById("Digit").value;
    arr = str.split(" ");
    let max = Math.max.apply(null, arr);
    document.getElementById("Answer").textContent = "Максимальное число: " +  max;
}