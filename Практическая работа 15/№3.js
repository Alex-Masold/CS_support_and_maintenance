let Animals = ["лев", "слон", "жираф", "носорог", "гепард"];
console.log(Animals);
Animals.unshift("KOB");
console.log("Добавим самое страшное животное а Африке", Animals);
let outSider = Animals.pop();
console.log(Animals, `\nСамое страшное животное ${Animals[0]}`, `Съел ${outSider+"a"}`);

