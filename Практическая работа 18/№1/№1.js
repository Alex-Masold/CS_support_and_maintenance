function ToInt(array)
{
    for (let i = 0; i < array.length; i++)
    {
        parseInt(array[i]);
    }
    return array;
}
function printSorted()
{
    let array = [];
    let added = document.getElementById("N").value;
    array = ToInt(added.split(" "));
    document.getElementById("unSort").textContent = array;
    document.getElementById("Sort").textContent = array.sort(function(a, b) {
        return a - b;
    });;
}
