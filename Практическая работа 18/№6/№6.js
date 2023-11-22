let translate = new Map(); 

translate.set("apple", "яблоко");
translate.set("cat", "кошка");
translate.set("sun", "солнце");
translate.set("book", "книга");
translate.set("tree", "дерево");
translate.set("flower", "цветок");
translate.set("computer", "компьютер");
translate.set("river", "река");
translate.set("moon", "луна");
translate.set("mountain", "гора");

function PrintAnswer()
{
    let word = document.getElementById("Word").value;
    if (translate.has(word))
    {
        document.getElementById("Answer").textContent = translate.get(word);
    }
    else
    {
        document.getElementById("Answer").textContent = "???";

    }
}