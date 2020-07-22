const LINE_LENGTH = 40;
let title = "Flintstone Family Members";

function centerText(text) {
  let padPerSide = (LINE_LENGTH - text.length) / 2;
  let padFront = Math.floor(padPerSide);
  let padEnd = Math.ceil(padPerSide);
  
  text = text.padEnd(text.length + padFront).text.padEnd(text.length + padEnd);
  
  
}