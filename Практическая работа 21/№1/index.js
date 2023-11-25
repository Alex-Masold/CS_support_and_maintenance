const CAT = [
  { name: "Whiskers", price: 500, food: "Fish" },
  { name: "Mittens",  price: 600, food: "Chicken" },
  { name: "Shadow",   price: 450, food: "Beef" },
  { name: "Fluffy",   price: 550, food: "Tuna" }
];
const DOG = [
  { name: "Buddy",    price: 800, food: "Beef" },
  { name: "Max",      price: 700, food: "Chicken" },
  { name: "Daisy",    price: 900, food: "Lamb" },
  { name: "Rocky",    price: 750, food: "Pork" }
];
function ContinueButton(WrapDiv, Function)
{
  let ContinueButton = document.createElement('button');
  ContinueButton.textContent = "Продолжить диалог";
  ContinueButton.onclick = Function;
  WrapDiv.appendChild(ContinueButton);
}
function Begin() {
  let name = prompt("Как вас зовут?");
  let WrapDiv = document.getElementById("wrap");
  
  alert(`Привет ${name}`);

  let HelloDiv = document.createElement('div');
  HelloDiv.className = "Answer";
  HelloDiv.textContent = `Привет, ${name}`;
  WrapDiv.appendChild(HelloDiv);
  
  ContinueButton(WrapDiv, ChoosePet)
}
function PrintPets(pets) 
{
  let WrapDiv = document.getElementById("wrap");

  let Pets = document.createElement('div');
  Pets.className = "Answer";

  for (animal of pets) 
  {
    Pets.textContent += `Имя: ${animal.name} Корм: ${animal.food} Стоимость: ${animal.price}\n`;
  }

  Pets.style.whiteSpace = "pre-line"
  WrapDiv.appendChild(Pets);
}
function PrintPrice(pets)
{
  let petName = prompt("Кто приглянулся?");
  let count = parseInt(prompt("Отличный выбор! Но надо купить корм. Сколько пакетов возьмете: "));
  let WrapDiv = document.getElementById("wrap");

  let printPrice = document.createElement("div");
  printPrice.className = "Answer";
  
  for (animal of pets)
  {
    if (animal.name === petName)
    {
      printPrice.textContent += `За ${count} штук ${animal.food} вы отдадите: ${count * animal.food.length * 100}\n`;
      printPrice.textContent += `Стоимость ${animal.name} состовляет ${animal.price}\n`;
      printPrice.textContent += `Общая стоимость ${animal.name} состовляет ${animal.price + count * animal.food.length * 100}\n`;
      printPrice.style.whiteSpace = "pre-line";
      WrapDiv.appendChild(printPrice);
      break;
    }
  }
  
}
function ChoosePet() {
  let WrapDiv = document.getElementById("wrap");
  let likes = confirm("Нравится ли тебе кошки?");

  let allegation = document.createElement("div");
  allegation.className = "Answer";

  if (likes) 
  {
    allegation.textContent = "Купи кошку!";
    WrapDiv.appendChild(allegation);

    PrintPets(CAT);

    ContinueButton(WrapDiv, function (){ PrintPrice (CAT)});
  } 
  else 
  {
    allegation.textContent = "Купи собаку!"
    WrapDiv.appendChild(allegation);
    
    PrintPets(DOG);

    ContinueButton(WrapDiv, function (){ PrintPrice (DOG)});

  }
}    