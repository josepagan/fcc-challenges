// Intermediate Algorithm Scripting: Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant
//  cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed
//  to be English words in all lowercase.


function translatePigLatin(str) {
    const regex = /^[^aeiou]+/
    const matched =  str.match(regex);
    if (!matched) return str.concat("way")
    const replaced = str.replace(regex,'')
    return replaced.concat(matched).concat("ay")
  }
  
  console.log(translatePigLatin("fuck"));
  

  const phrase = (str) => {
      const splitted = str.toLowerCase().split(" ");
      const processed = splitted.map(el=>translatePigLatin(el))
      return processed.join(" ")
  }

  console.log(phrase("can you understand me"))