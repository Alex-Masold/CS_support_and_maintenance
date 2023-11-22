let basketball_players = [
    {name: "Леброн Джеймс",         height: 206,    weight: 113,    from: "США"},
    {name: "Карим Абдул-Джаббар",   height: 218,    weight: 121,    from: "США"},
    {name: "Карл Мэлоун",           height: 206,    weight: 117,    from: "США"},
    {name: "Коби Брайант",          height: 198,    weight: 96,     from: "США"},
    {name: "Майкл Джордан",         height: 198,    weight: 98,     from: "США"},
    {name: "Дирк Новицки",          height: 213,    weight: 111,    from: "Germany"},
    {name: "Уилт Чемберлен",        height: 216,    weight: 125,    from: "США"},
    {name: "Шакил О’Нил",           height: 216,    weight: 147,    from: "США"}
];
function printAnswer()
{
    let result = [];
    for (player of basketball_players)
    {
        if (player.height >= 190 && player.weight <= 100)
        {
            result.push(`${player.name}: рост: ${player.height} вес: ${player.weight} страна: ${player.from}`);
        }
    }
    document.getElementById("Answer").textContent = result.join('\n');
    document.getElementById("Answer").style.whiteSpace = "pre-line";
}