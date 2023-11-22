let WayVKI = [];
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
WayVKI.pop();
WayVKI.pop();
WayVKI.push("Спуститься вниз");
console.log(WayVKI);
for (let i = WayVKI.length - 1; i >= 0; i--) 
{
    if (WayVKI[i].includes("вниз"))
    {
        WayVKI[i] = "Подняться вверх";
    }
    console.log(WayVKI[i], "\n");
}