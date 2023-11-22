let products = [
    {name: "Яблоко",        height: 5,      caloric_content: 52},
    {name: "Банан",         height: 6.5,    caloric_content: 89},
    {name: "Морковь",       height: 15,     caloric_content: 41},
    {name: "Картофель",     height: 8,      caloric_content: 77},
    {name: "Куриное мясо",  height: 4,      caloric_content: 165},
    {name: "Свекла",        height: 10,     caloric_content: 43},
    {name: "Рис",           height: 1.2,    caloric_content: 130}
];
function printAnswer()
{
    let = min_caloric_content = Infinity;
    let min_product1;
    let min_product2;
    let min_product3;


    for (let i = 0; i < products.length - 1; i++)
    {
        for (let j = i + 1; j < products.length; j++) 
        {
            for (let z = j + 1; z < products.length; z++) 
            {
                let now_caloric_content = products[i].caloric_content + products[j].caloric_content + products[z].caloric_content;
                if (now_caloric_content < min_caloric_content)
                {
                    min_caloric_content = now_caloric_content;
                    min_product1 = products[i];
                    min_product2 = products[j];
                    min_product3 = products[z];
                }
            }
            
        }
    }
    document.getElementById("Answer").textContent = 
    `${min_product1.name}: калорийность: ${min_product1.caloric_content} вес: ${min_product1.height}` + '\n' + 
    `${min_product2.name}: калорийность: ${min_product2.caloric_content} вес: ${min_product2.height}` + '\n' + 
    `${min_product3.name}: калорийность: ${min_product3.caloric_content} вес: ${min_product3.height}` + '\n' + 
    `Количество калорий ${min_product1.name}, ${min_product2.name} и ${min_product3.name}: ${min_caloric_content}`;
    document.getElementById("Answer").style.whiteSpace = "pre-line";
    // console.log(min_product1);
    // console.log(min_product2);
    // console.log(min_caloric_content);
}
