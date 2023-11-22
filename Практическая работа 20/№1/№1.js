function printAnswer()
{
    let name = document.getElementById("Name").value;
    if (name.length > 5)
    {
        document.getElementById("Answer").textContent = "Какое длинное имя! Лучше его сменить, а то я его не запомню"
    }
    else
    {
        document.getElementById("Answer").textContent = "Краткость - сестра таланта"
    }
}