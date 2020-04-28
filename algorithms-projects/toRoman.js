

const convertToRoman = (n, arr = []) => {
  const chart = {
    X: { value: 10, restLetter: "I" },
    I: { value: 1, restLetter: null },
    V: { value: 5, restLetter: "I" },
    L: { value: 50, restLetter: "X" },
    C: { value: 100, restLetter: "X" },
    D: { value: 500, restLetter: "C" },
    M: { value: 1000, restLetter: "C" },
  };
  
  const useRoman = (n) => {
    let letter;
    if (n > 0 && n < 4) letter = "I";
    if (n >= 4 && n < 9) letter = "V";
    if (n >= 9 && n < 40) letter = "X";
    if (n >= 40 && n < 90) letter = "L";
    if (n >= 90 && n < 400) letter = "C";
    if (n >= 400 && n < 900) letter = "D";
    if (n >= 900 && n < 4000) letter = "M";
    return letter;
  };

  if (n === 0) return arr.join("");
  const letter = useRoman(n);
  const letterValue = chart[letter].value;
  const rest = n - letterValue;
  //if rest <0 we have to put some letter BEFORE
  //for example 92.
  //letter will be C
  //restletter will be X
  //prepended value will be the sum of letter and  - rest letter. C-X=90
  //and forwarded value will be the rest carried away 2 in this case.
  if (rest < 0) {
    const restLetter = chart[letter].restLetter;
    const restLetterValue = chart[restLetter].value;
    const prependedValue = letterValue - restLetterValue;
    const forwardedValue = n - prependedValue
    return convertToRoman(0, [
      ...arr,
      restLetter,
      letter,
      convertToRoman(forwardedValue),
    ]);
  }
  return convertToRoman(rest, [...arr, letter]);
};
console.log(convertToRoman(1953));
