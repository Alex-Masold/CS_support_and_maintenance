const russianAlphabet = new Map([
  ["а", 1],
  ["б", 2],
  ["в", 3],
  ["г", 4],
  ["д", 5],
  ["е", 6],
  ["ё", 7],
  ["ж", 8],
  ["з", 9],
  ["и", 10],
  ["й", 11],
  ["к", 12],
  ["л", 13],
  ["м", 14],
  ["н", 15],
  ["о", 16],
  ["п", 17],
  ["р", 18],
  ["с", 19],
  ["т", 20],
  ["у", 21],
  ["ф", 22],
  ["х", 23],
  ["ц", 24],
  ["ч", 25],
  ["ш", 26],
  ["щ", 27],
  ["ъ", 28],
  ["ы", 29],
  ["ь", 30],
  ["э", 31],
  ["ю", 32],
  ["я", 33],
]);

function PrintAnswer() {
  let descripted_word = Descript(getWord());
  //let descripted_word = Descript("Русское слово");

  let undescripted_word = Undescript(descripted_word);
  //let undescripted_word = Undescript(descripted_word);
  document.getElementById("Descripted_text").textContent =
    " " + descripted_word.join("");
  //console.log(descripted_word);

  document.getElementById("Undescripted_text").textContent =
    " " + undescripted_word;
  //console.log(undescripted_word);
}

function getWord() {
  let gettedWord = document.getElementById("russian_word").value;
  return gettedWord;
}

function Undescript(descripted_word) {
  let original_word = [];
  for (let i = 0; i < descripted_word.length; i++) {
    if (/^\d+$/.test(descripted_word[i])) {
      russianAlphabet.forEach((value, key) => {
        if (value === parseInt(descripted_word[i])) {
          original_word.unshift(key);
        }
      });
    } else {
      original_word.unshift(descripted_word[i]);
    }
  }
  return original_word.join("");
}

function Descript(word) {
  let descripted_word = [];
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (!russianAlphabet.has(word[i])) {
      descripted_word.push(word[i]);
    } else {
      descripted_word.push(russianAlphabet.get(word[i]));
    }
  }
  return descripted_word;
}
