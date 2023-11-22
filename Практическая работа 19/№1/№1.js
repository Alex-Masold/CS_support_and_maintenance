let planets = [
    {name: "Меркурий",  distance: 0.387},
    {name: "Венера",    distance: 0.723},
    {name: "Земля",     distance: 1.000},
    {name: "Марс",      distance: 1.524},
    {name: "Юпитер",    distance: 5.204},
    {name: "Сатурн",    distance: 9.582},
    {name: "Уран",      distance: 19.230},
    {name: "Нептун",    distance: 30.100}
];
function printAnswer()
{
    let result = [];
    for (planet of planets)
    {
        if (planet.distance >= 1)
        {
            result.push(`${planet.name}: ${planet.distance}`);
        }
    }
    document.getElementById("Answer").textContent = result.join('\n');
    document.getElementById("Answer").style.whiteSpace = "pre-line";
}