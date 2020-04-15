// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const reduced = str.split("").reduce(
    (prev, curr) => {
      const obj = {
        current: curr.charCodeAt(0),
        letter: prev.letter,
      };
      //if there is a jump between charcode between the previous and current...
      //we can identify where the "abc... chain gets disrupted so we assign it to that letter"
      if (prev.current && obj.current - prev.current !== 1) obj.letter = curr;
      return obj;
    },
    { current: null, letter: undefined }
  );
  if (reduced.letter === undefined) return undefined
  return String.fromCharCode(reduced.letter.charCodeAt(0) - 1)
}

console.log(fearNotLetter("abcdf"));
