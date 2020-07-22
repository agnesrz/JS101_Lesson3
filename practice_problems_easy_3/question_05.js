// # The following function unnecessarily uses two return statements
//    to return boolean values. How can you eliminate the unnecessary duplication?

// Solution 1
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  }
}