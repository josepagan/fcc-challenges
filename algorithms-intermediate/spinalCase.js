// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") //adds a space before any capital
    .trim() //trims posible space before first letter if capital
    .toLowerCase()
    .split(/[\W_]/) 
    .join("-");
}

console.log(spinalCase("This Is Spinal Tap"));
