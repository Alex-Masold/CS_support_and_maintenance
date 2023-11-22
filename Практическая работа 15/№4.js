function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
let predators = ["тигр", "лев", "волк", "пума", "ягуар"];
console.log(predators);
let herbivores = ["слон", "олень", "зебра", "кролик", "косуля"];
console.log(herbivores);
let friendlyfamily = predators.concat(herbivores);
console.log(friendlyfamily);
swap(friendlyfamily);
console.log(friendlyfamily);