let WayVKI = [];
let Backway = [];
WayVKI.push("Белый сад");
WayVKI.push("Больница № 9");
WayVKI.push("Гимназия № 8");
WayVKI.push("Керченская улица");
WayVKI.push("Радиостанция №2");
WayVKI.push("Медицинский центр");
WayVKI.push("Посёлок Мирный");
WayVKI.push("Приобские электросети");
WayVKI.push("Посёлок Матвеевка");
WayVKI.push("Светлая");
WayVKI.push("ДОЦ им. Тюленина");
WayVKI.push("Нижняя Ельцовка");
WayVKI.push("Клиника Мешалкина");
WayVKI.push("Русская улица");
WayVKI.push("HИИ систeм");
WayVKI.push("Пройти на восток 105м")

Backway = WayVKI.reverse();
for (let i = Backway.length - 1; i >= 0; i--) 
{
    if (Backway[i].includes("восток"))
    {
        Backway[i] = Backway[i].split(" ");
        Backway[i][2] = "запад";
        Backway[i] = Backway[i].join(" ");
    }
}
Backway.splice(1, 0, "Перейти дорогу");
console.log(Backway);