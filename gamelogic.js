const { question } = require("readline-sync");// do not forget npm install readline-sync

function displayWordSoFar(word, guesses)
{
  // WRITE ME

  let guessStr="";

  for (let i=0;i<word.length;i++)
  {
    guessStr=guessStr+"_ ";
  }

  for (let i=0;i<guesses.length;i++)
  {
    let char = guesses[i].toLowerCase();
    for (let j = 0; j < word.length; j++)
    {
      if (char == word.charAt(j).toLowerCase())
      {
        let guessStrList=guessStr.split('');
        guessStrList[j*2] = char;
        guessStr=guessStrList.join('')
      }
    }
  }
  return guessStr
}

function isGameWon(word, guesses) {
  // WRITE ME
  let output
  let guessStr=displayWordSoFar(word, guesses)
  let guessStrList=guessStr.split(' ')
  guessStr=guessStrList.join('')
  if (guessStr==word){output=true}
  else{output=false}
  return output
}

function isGameLost(word, guesses)
{
  // WRITE ME
  let output=true;
  let nErrors=0;
  if (guesses.length>=7 )
  {
    for (let i=0;i<guesses.length;i++)
    {
      if (!word.includes(guesses[i]))
      {
        nErrors=nErrors+1;
      }
    }
    if (nErrors<7){output=false;}
  }
  else
  {
    output=false;//in that case, the player has not played 7 times so she/he has not lost yet
  }
  return output
}

// const word = "javascript";
// const guesses = ["a", "t", "i", "b", "k"];
const word = "javascript";
const guesses = [];


let out=displayWordSoFar(word, guesses)
console.log('displayWordSoFar',out)

const word2 = "javascript";
const guesses2 = ["j", "a", "v", "s", "c", "r", "i", "p", "t"];

out=isGameWon(word2, guesses2);
console.log('isGameWon',out)

const word3 = "javascript";
const guesses3 = ["o", "l", "q", "w", "e", "r", "t", "y", "z"];

out=isGameLost(word3, guesses3);
console.log('isGameLost',out)
module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
