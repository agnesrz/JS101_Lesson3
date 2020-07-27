function isDotSeparatedIpAddress(inputString) {
  const SECTIONS_IN_IP_ADDRESS = 4;
  let dotSeparatedWords = inputString.split(".");
  let result = dotSeparatedWords.length === SECTIONS_IN_IP_ADDRESS;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      result = false;
      break;
    }
  }

  return result;
}

function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false; //

  let number = Number(str);
  return number >= 0 && number <= 255;
}

//console.log(isDotSeparatedIpAddress('14.222.341'));  // false
console.log(isDotSeparatedIpAddress('14.222.31.37')); // true