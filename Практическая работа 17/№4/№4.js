function IsPrime(num)
{
    for (let i = 2; i <= Math.sqrt(num);) 
    {
        if (num % i == 0) return false;
        i == 2 ? i++ : i += 2;
        
    }
 return num > 1;
}
function printsimpledimple ()
{
    let simpledimple = []; 
    var N;
    N = document.getElementById("N").value;
    for (let i = 1; i < N; i++) 
    {
        if (IsPrime(i))
        {
            simpledimple.push(i)
        }
    }
    document.getElementById("Answer").textContent = simpledimple
}
let simpledimple = []; 
var N;
N = document.getElementById("N").value;
for (let i = 1; i < N; i++) 
{
    if (IsPrime(i))
    {
        simpledimple.push(i)
    }
}