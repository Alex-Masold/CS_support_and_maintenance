let catName =
[
    "Луна", 
    "Тайга", 
    "Барсик", 
    "Симба", 
    "Мурзик", 
    "Нора", 
    "Белиссимо", 
    "Шершень" 
];
let dogName = 
[
    "Рекс", 
    "Макс", 
    "Белла", 
    "Джек", 
    "Лола", 
    "Барон", 
    "Рада", 
    "Шарик"
];
function printAnswer()
{
    let name = document.getElementById("Name").value;
    if (catName.includes(name))
    {
        document.getElementById("Answer").textContent = "Похоже вы кошка";
    }
    else if (dogName.includes(name))
    {
        document.getElementById("Answer").textContent = "Похоже вы собака";
    }
    else
    {
        document.getElementById("Answer").textContent = "Похоже вы человек";
    }
}