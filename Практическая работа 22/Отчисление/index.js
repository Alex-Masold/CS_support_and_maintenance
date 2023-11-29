document.addEventListener("DOMContentLoaded", function () {
  Begin();
});
function CreateButton(WrapDiv, str, Function) {
  let WrapContinueDiv = document.createElement("div");
  let button = document.createElement("button");
  button.textContent = str;
  button.onclick = Function;
  WrapContinueDiv.appendChild(button);
  WrapDiv.appendChild(WrapContinueDiv);
}
function Begin() {
  let mainDiv = document.getElementById("wrapper");
  let wraperDiv = document.createElement("div");
  wraperDiv.className = "wrapper";
  wraperDiv.innerHTML = "";
  mainDiv.appendChild(wraperDiv);

  let heading = document.createElement("h1");
  heading.textContent = "404 Студент потерян";
  wraperDiv.appendChild(heading);

  let button1 = document.createElement("button");
  button1.textContent = "Удвоенное четность(#1)";
  button1.onclick = function () {
    Task1(wraperDiv);
  };
  wraperDiv.appendChild(button1);

  let button2 = document.createElement("button");
  button2.textContent = "Рассисткое плюсование(#2)";
  button2.onclick = function () {
    Task2(wraperDiv);
  };
  wraperDiv.appendChild(button2);

  let button3 = document.createElement("button");
  button3.textContent = "Цикличный Факториал(#3)";
  button3.onclick = function () {
    Task3(wraperDiv);
  };
  wraperDiv.appendChild(button3);

  let button4 = document.createElement("button");
  button4.textContent = "Факториал Факториала Факториала(#4)";
  button4.onclick = function () {
    Task4(wraperDiv);
  };
  wraperDiv.appendChild(button4);

  let button5 = document.createElement("button");
  button5.textContent = "О боже какой фибоначи(#5)";
  button5.onclick = function () {
    Task5(wraperDiv);
  };
  wraperDiv.appendChild(button5);
}

function Double(array, check) {
  if (check === true) {
    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) % 2 === 0) {
        array[i] = parseInt(array[i]) * 2;
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) % 2 != 0) {
        array[i] = parseInt(array[i]) * 2;
      }
    }
  }
  return array;
}
function Task1(WrapDiv) {
  WrapDiv.innerHTML = "";

  let parity = confirm("Чётное или нечётное?");
  let digits;

  let heading = document.createElement("h1");
  if (parity === true) {
    heading.textContent = "Удвоение Четных";
  } else {
    heading.textContent = "Удвоение Нечетных";
  }
  WrapDiv.appendChild(heading);

  CreateButton(WrapDiv, "назад", function () {
    WrapDiv.innerHTML = "";
    Begin();
  });

  let inputDigit = document.createElement("input");
  inputDigit.type = "text";
  WrapDiv.appendChild(inputDigit);

  let answerDiv = document.createElement("div");
  answerDiv.className = "Answer";
  answerDiv.style.whiteSpace = "pre-line";
  WrapDiv.appendChild(answerDiv);

  CreateButton(WrapDiv, "вычислить", function () {
    digits = inputDigit.value;
    digits = digits.split(" ");
    digits = Double(digits, parity);
    answerDiv.textContent = digits;
  });
}
function SummaryFirst(array, check) {
  let result = 0;
  if (array.length > 5) {
    if (check === true) {
      for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) % 2 === 0) {
          result += parseInt(array[i]);
        }
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) % 2 != 0) {
          result += parseInt(array[i]);
        }
      }
    }
  } else {
    alert(`Слишком маленький массив ${5 - array.length}`);
  }
  return result;
}
function Task2(WrapDiv) {
  WrapDiv.innerHTML = "";
  let parity = confirm("Чётное или нечётное?");
  let digits;

  let heading = document.createElement("h1");
  if (parity === true) {
    heading.textContent = "Плюсуем Четных";
  } else {
    heading.textContent = "Плюсуем Нечетных";
  }
  WrapDiv.appendChild(heading);

  CreateButton(WrapDiv, "назад", function () {
    WrapDiv.innerHTML = "";
    Begin();
  });

  let inputDigit = document.createElement("input");
  inputDigit.type = "text";
  WrapDiv.appendChild(inputDigit);

  let answerDiv = document.createElement("div");
  answerDiv.className = "Answer";
  answerDiv.style.whiteSpace = "pre-line";
  WrapDiv.appendChild(answerDiv);

  CreateButton(WrapDiv, "вычислить", function () {
    let result;
    digits = inputDigit.value;
    digits = digits.split(" ");
    result = SummaryFirst(digits, parity);
    answerDiv.textContent = result;
  });
}
function Factorial(digit, Function) {
  if (isNaN(digit) || digit < 0) {
    alert("Недопустимое значение!\nили Вы ввели не отрицательное число!");
    return 0;
  } else {
    return Function;
  }
}
function ForFactorial(digit) {
  let factorial = 1;
  for (let i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
function Task3(WrapDiv) {
  {
    WrapDiv.innerHTML = "";
        let digits;


    let heading = document.createElement("h1");
  heading.textContent = "Круговорот факториалов в природе";
  WrapDiv.appendChild(heading);

    CreateButton(WrapDiv, "назад", function () {
      WrapDiv.innerHTML = "";
      Begin();
    });
    let inputDigit = document.createElement("input");
    inputDigit.type = "text";
    WrapDiv.appendChild(inputDigit);

    let answerDiv = document.createElement("div");
    answerDiv.className = "Answer";
    answerDiv.style.whiteSpace = "pre-line";
    WrapDiv.appendChild(answerDiv);

    CreateButton(WrapDiv, "вычислить", function () {
      let result;
      digits = inputDigit.value;
      digits = parseInt(digits);
      result = Factorial(digits, ForFactorial(digits));
      answerDiv.textContent = ` Факториал числа ${digits} (обычно): ${result} `;
    });
  }
}

function recursiveFactorial(digit) {
  if (digit <= 1) {
    return 1;
  } else {
    return digit * recursiveFactorial(digit - 1);
  }
}
function Task4(WrapDiv) {
  WrapDiv.innerHTML = "";

  let heading = document.createElement("h1");
  heading.textContent = "Факториал факториала факториала";
  WrapDiv.appendChild(heading);


  CreateButton(WrapDiv, "назад", function () {
    WrapDiv.innerHTML = "";
    Begin();
  });
  let digits;
  let inputDigit = document.createElement("input");
  inputDigit.type = "text";
  WrapDiv.appendChild(inputDigit);

  let answerDiv = document.createElement("div");
  answerDiv.className = "Answer";
  answerDiv.style.whiteSpace = "pre-line";
  WrapDiv.appendChild(answerDiv);

  CreateButton(WrapDiv, "вычислить", function () {
    let result;
    digits = inputDigit.value;
    digits = parseInt(digits);
    result = Factorial(digits, recursiveFactorial(digits));
    answerDiv.textContent = ` Факториал числа ${digits} (рекурсивно): ${result} `;
  });
}
function Fibonacci(digit, Function) {
  if (isNaN(digit) || digit < 0) {
    alert("Недопустимое значение!\nили Вы ввели не отрицательное число!");
    return 0;
  } else {
    return Function;
  }
}

function FibonacciRecursively(digit) {
  if (digit <= 1) {
    return digit;
  } else {
    return FibonacciRecursively(digit - 1) + FibonacciRecursively(digit - 2);
  }
}
function Task5(WrapDiv) {
  WrapDiv.innerHTML = "";

  let heading = document.createElement("h1");
  heading.textContent = "Фибоначчи";
  WrapDiv.appendChild(heading);

  CreateButton(WrapDiv, "назад", function () {
    WrapDiv.innerHTML = "";
    Begin();
  });
  let digits;
  let inputDigit = document.createElement("input");
  inputDigit.type = "text";
  WrapDiv.appendChild(inputDigit);

  let answerDiv = document.createElement("div");
  answerDiv.className = "Answer";
  answerDiv.style.whiteSpace = "pre-line";
  WrapDiv.appendChild(answerDiv);

  CreateButton(WrapDiv, "вычислить", function () {
    let result;
    digits = inputDigit.value;
    digits = parseInt(digits);
    result = Factorial(digits, FibonacciRecursively(digits));
    answerDiv.textContent = ` Число Фибоначи от ${digits} (рекурсивно): ${result} `;
  });
}
