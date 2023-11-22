let dontrighrstr = "каК Я лЮблю уЧиться";
console.log(dontrighrstr);
dontrighrstr = dontrighrstr.toLowerCase();
console.log(dontrighrstr);
let array = [];
let firstToUpper;
let rightstr;
let j = 0;
for (let i = 0; i < dontrighrstr.length; i++) 
{
    if (dontrighrstr[i] == ' ')
    {
        array.push(dontrighrstr.slice(j, i))
        j = i;
    }
}
array.push(dontrighrstr.slice(j, dontrighrstr.length))
console.log(array);
rightstr = array.join(' ');
firstToUpper = rightstr[0].toUpperCase();
rightstr = rightstr.slice(1, rightstr.length);
rightstr = firstToUpper + rightstr;
console.log(rightstr);
