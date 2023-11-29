document.addEventListener("DOMContentLoaded", function () {
  Begin();
});

var startTime;
var elapsedTime;
var timerId;

function ContinueButton(WrapDiv, Function) {
  let WrapContinueDiv = document.createElement("div");
  let ContinueButton = document.createElement("button");
  ContinueButton.textContent = "Продолжить диалог";
  ContinueButton.onclick = Function;
  WrapContinueDiv.appendChild(ContinueButton);
  WrapDiv.appendChild(WrapContinueDiv);
}
function Begin() {
  let MainDiv = document.getElementById("wrapper");
  let wraperDiv = document.createElement("div");
  wraperDiv.className = "wrapper";
  MainDiv.appendChild(wraperDiv);

  let BeginButton = document.getElementById("Begin");
  BeginButton.onclick = function () {
    Start(wraperDiv);
  };
}
function Check(randomDigit) {
  let digit = parseInt(document.getElementById("inputDigit").value);
  if (digit == randomDigit) {
    return true;
  } else {
    return false;
  }
}
function UpdateTimer() {
  let currentTime = new Date();
  elapsedTime = Math.floor((currentTime - startTime) / 1000); // в секундах
  console.log("Прошло времени: " + elapsedTime + " секунд");
}
function StopTimer() {
  clearInterval(timerId);
  console.log("Время Остановлено");
}
function Start(wraperDiv) {
  let start = confirm("Хотите испытать свои способности?");

  if (start == true) {
    wraperDiv.innerHTML = "";
    let randomDigit = Math.floor(Math.random() * 100) + 1;
    let count = 5;
    let flag = false;

    let countDiv = document.createElement("div");
    countDiv.textContent = "У Вас осталось " + count + " попыток.";
    wraperDiv.appendChild(countDiv);

    let inputDigit = document.createElement("input");
    inputDigit.type = "text";
    inputDigit.id = "inputDigit";
    wraperDiv.appendChild(inputDigit);

    startTime = new Date();

    timerId = setInterval(UpdateTimer, 1000);

    //let randomDigitDiv = document.createElement("div");
    //randomDigitDiv.textContent = randomDigit;
    //wraperDiv.appendChild(randomDigitDiv);

    ContinueButton(wraperDiv, function () {
      flag = Check(randomDigit);
      if (flag) {
        alert(`Угадали!\nВы справились за ${elapsedTime} секунд.`);
        StopTimer();
        wraperDiv.innerHTML = "";
      } else {
        if (count != 0) {
          count--;
          countDiv.textContent = `У Вас осталось ${count} попыток.`;
          inputDigit.value = "";
          alert("Попробуйте еще раз.");
        } else {
          alert("Попытки закончились!\nВы проиграли!\nПакуйте его парни!");
          StopTimer();
          wraperDiv.innerHTML = "";
        }
      }
    });
  } else {
    wraperDiv.innerHTML = "";
    let finalDiv = document.createElement("div");
    finalDiv.id = "final";
    finalDiv.textContent = "Очень жаль";
    wraperDiv.appendChild(finalDiv);
  }
}
