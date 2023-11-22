function randomazer (length)
{
    return Math.floor(Math.random() * length);
}
function PrintAnswer ()
{
    let phrases = 
    [
        "Звучит неплохо",
        "Да, это определенно надо сделать",
        "Не думаю, что это хорошая идея",
        "Может, не сегодня?",
        "Компьютер говорит нет",
        "Ы"
    ];

    let Answer = 
    [
        "Введи вопрос",
        "Вопроса не слышу",
        "Не хочу отвечать",
        "Нет"
    ]
    if (document.getElementById("Question").value.trim() !== "")
    {
        document.getElementById("Answer").textContent = phrases[randomazer(phrases.length)];
    }
    else
    {
        document.getElementById("Answer").textContent = Answer[randomazer(Answer.length)];
    }
}
