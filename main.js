// "_____________! he said ________ as he jumped into his convertible
//    exclamation            adverb
// ______ and drove off with his __________ wife."
// noun                          adjective

const phrases = document.querySelector("#phrases");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const grammar = document.querySelector("#grammar");
const typeGrammar = document.querySelector("#type");
const tryAgain = document.querySelector("#tryAgain");
const listGrammar = ["nounone", "adverb", "nountwo", "adjective"];
const currentPhrases = {};
let question = 0;
let sentenceFinished = false
//
// button.addEventListener("click", function (e) {
//   if (!sentenceFinished === true) {
//     if (question === 3) {
//       sentenceFinished = true;
//       console.log(currentPhrases);
//       typeGrammar.innerHTML = listGrammar[question];
//       currentPhrases[listGrammar[question]] = phrases.value;
//       text.innerHTML =
//       currentPhrases[listGrammar[0]] + "! he said "+currentPhrases[listGrammar[1]]+" as he jumped into his convertible "+currentPhrases[listGrammar[2]]+" and drove off with his "+currentPhrases[listGrammar[3]]+" wife.";
//       typeGrammar.innerHTML = listGrammar[0];
//       question = 0;
//       tryAgain.addEventListener("click", function () {
//         sentenceFinished = false;
//         text.innerHTML = "\"_____________! he said ________ as he jumped into his convertible ______ and drove off with his __________ wife.\""
//       });
//     } else {
//       console.log(typeGrammar);
//       typeGrammar.innerHTML = listGrammar[question];
//       currentPhrases[listGrammar[question]] = phrases.value;
//       question++;
//       console.log(currentPhrases);
//     }
//   }
// });

new Madlib(0, text, phrases, button, tryAgain, typeGrammar);
