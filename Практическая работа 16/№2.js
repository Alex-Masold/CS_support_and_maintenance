function convertWeight(weight) 
{
    let puds = Math.trunc(weight / 16); // 1 пуд = 16 кг
    let pounds = (weight % 16) * 0.4; // 1 фунт = 400 грамм

    return {
        puds: puds,
        pounds: pounds
    };
}

let weightInKg = 100;
let convertedWeight = convertWeight(weightInKg);

console.log("Ваш вес в пудах и фунтах: " + convertedWeight.puds + " пудов, " + convertedWeight.pounds + " фунтов.");
