function calculateWeight() 
{
    let weightInKg = document.getElementById("weightInput").value;
    let puds = Math.trunc(weightInKg / 16); // 1 пуд = 16 кг
    let pounds = (weightInKg % 16); // 1 фунт = 400 грамм
    let potato = Math.trunc(weightInKg / 0.140);
    let frog = Math.trunc(weightInKg / 0.7);

    alert(`Ваш вес в пудах и фунтах: ${puds} пудов, ${pounds} фунтов.
Ваш вес в картошках: ${potato}+- картошек.
Ваш вес в лягушках: ${frog}+- лягушек.`);
}