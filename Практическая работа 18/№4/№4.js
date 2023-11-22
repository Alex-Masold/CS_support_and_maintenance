function Distance (x1, y1, x2, y2)
{
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function PrintDistance ()
{
    
    let x1 = document.getElementById("x1").value;;
    let y1 = document.getElementById("y1").value;;
    let x2 = document.getElementById("x2").value;;
    let y2 = document.getElementById("y2").value;;
    let distance = Distance(x1, y1, x2, y2);
    document.getElementById("Answer").textContent = `Длина отрезка: ${distance}`;
}
