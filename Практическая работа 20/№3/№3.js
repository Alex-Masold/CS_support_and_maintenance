let schedule =
    [
        { day: "Понедельник", diner: "Каша", place: "Колледж" },
        { day: "Вторник", diner: "Гречка", place: "Колледж" },
        { day: "Среда", diner: "Яичница", place: "Колледж" },
        { day: "Четверг", diner: "Каша", place: "Колледж" },
        { day: "Пятница", diner: "Гречка", place: "Колледж" },
        { day: "Суббота", diner: "Каша", place: "Театр" },
        { day: "Воскресенье", diner: "Гречка", place: "Кино" }
    ];
let res;
function printAnswer() {
    let day = document.getElementById("Name").value;
    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].day == day) {
            res = `Сегодня на завтрак: ${schedule[i].diner},\n а после завтрака вы пойдете ${schedule[i].place}`;
            switch (day) {
                case "Понедельник":
                case "Вторник":
                case "Среда":
                case "Четверг":
                case "Пятница":
                    document.getElementById("Answer").textContent = res;
                    document.getElementById("Answer").style.whiteSpace = "pre-line";
                    document.getElementById("Link").innerHTML = `<a href="https://ci.nsu.ru/">${schedule[i].place}</a>`;
                    break;
                case "Суббота":
                    document.getElementById("Answer").textContent = res;
                    document.getElementById("Answer").style.whiteSpace = "pre-line";
                    document.getElementById("Link").innerHTML = `<a href="https://novat.ru/">${schedule[i].place}</a>`;
                    break;
                case "Воскресенье":
                    document.getElementById("Answer").textContent = res;
                    document.getElementById("Answer").style.whiteSpace = "pre-line";
                    document.getElementById("Link").innerHTML = `<a href="https://www.kinopoisk.ru/">${schedule[i].place}</a>`;
                    break;
                default:
                    break;
            }
            break;
        }
    }
}
