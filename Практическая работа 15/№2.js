let animal = [];
animal.push("Газебо");
animal.push("Крыса");
animal.push("Пес");
animal.push("Пробел");
console.log(animal);

[animal[0], animal[animal.length - 1]] = [animal[animal.length - 1], animal[0]]
console.log(animal);

function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
swap(animal);
console.log("Галя, ОТМЕНА!",animal);