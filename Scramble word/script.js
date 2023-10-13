// ============================== Word Scramble Game ===============================

let originalWord = "Hammad";
function scrambleWord(word) {
  let originalLength = word.length;
  let scrambledWord = "";
  for (let i = 0; i < originalLength; i++) {
    let randomIndex = Math.floor(Math.random() * word.length);
    scrambledWord += word.charAt(randomIndex);
    word = word.slice(0, randomIndex) + word.slice(randomIndex + 1);
    console.log(`Original: ${originalWord}, Scrambled: ${scrambledWord}, Remaining: ${word}`);
  }
  return scrambledWord;
}

console.log("Scrambled Word:", scrambleWord(originalWord));
