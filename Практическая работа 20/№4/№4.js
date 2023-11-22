let nowDate = new Date();

function printAnswer() {
  let favoriteDate = new Date(document.getElementById("favorite_date").value);

  let timeDifference = nowDate - favoriteDate;
  let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  document.getElementById("Days").textContent =
    "Прошло " + dayDifference + " дней";
  document.getElementById("Years").textContent =
    "Прошло " + Math.floor(dayDifference / 365) + " лет";
}
