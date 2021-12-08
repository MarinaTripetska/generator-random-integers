const elBtnGenerator = document.getElementById("btnGeneration");
const elBasicGeneration = document.getElementById("basicGeneration");
const table = document.querySelector("tbody");

elBtnGenerator.addEventListener("click", () => onGenerator(1, 100, 20));

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function onGenerator(min, max, quantity) {
  const numArr = [];
  const odd = [];
  const even = [];
  table.textContent = "";

  for (let i = 1; i <= quantity; i += 1) {
    const num = getRandomNum(min, max);
    numArr.push(num);
  }

  const sortedArr = [...numArr].sort((a, b) => a - b);
  sortedArr.forEach((n) => (n % 2 ? odd.push(n) : even.push(n)));

  const sumArr = [even, odd];

  if (even.length > odd.length) {
    const convertedInRows = sumArr[0].map((col, index) => {
      return sumArr.map((row) => {
        return row[index] ? row[index] : "-";
      });
    });

    convertedInRows.forEach((e) => {
      table.innerHTML += "<tr><td>" + e[0] + "</td><td>" + e[1] + "</td></tr>";
    });
  } else {
    const convertedInRows = sumArr[1].map((col, index) => {
      return sumArr.map((row) => {
        return row[index] ? row[index] : "-";
      });
    });

    convertedInRows.forEach((e) => {
      table.innerHTML += "<tr><td>" + e[0] + "</td><td>" + e[1] + "</td></tr>";
    });
  }

  elBasicGeneration.textContent = numArr.join(", ");
}
