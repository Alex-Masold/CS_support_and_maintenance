function PrintAnswer()
{
    let String = "Вася любит информатику и Вася любит петь"
    document.getElementById("Original").textContent = String;
    String = String.split(" ");
    for (let i = 0; i < String.length; i++) 
    {
        if (String[i] === "Вася")
        {
            String[i] = "Noname";
        }
    }
    String = String.join(" ");
    document.getElementById("Answer").textContent = String;
}