let munstersDescription = "The Munsters are creepy and spooky.";
let munstersDescriptionReversed = '';

function detectLetterCase(letter) {
  let letterCase = letter.match(/[A-Z]/);
  return letterCase === null ? 'lowercase' : 'uppercase';
}

for (let idx = 0; idx < munstersDescription.length; idx += 1) {
  let letterCase = detectLetterCase(munstersDescription[idx]);
  letterCase === 'uppercase' ?
    munstersDescriptionReversed += munstersDescription[idx].toLowerCase() :
    munstersDescriptionReversed += munstersDescription[idx].toUpperCase();
}

console.log(munstersDescriptionReversed);