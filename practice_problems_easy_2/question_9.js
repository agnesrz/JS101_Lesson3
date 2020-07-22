const LINE_LENGTH = 40;
let title = "Flintstone Family Members";
let centeredTitle = centerText(title);

function centerText(text) {
  let padFront = Math.floor((LINE_LENGTH - text.length) / 2);
  
  let centeredText = text.padStart(text.length + padFront);
  return centeredText.padEnd(LINE_LENGTH);
}

console.log(centeredTitle);
console.log(centeredTitle.length);