// "_____________! he said ________ as he jumped into his convertible
//    exclamation            adverb
// ______ and drove off with his __________ wife."
// noun                          adjective

const phrases = document.querySelector("#phrases");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const typeGrammar = document.querySelector("#type");
const tryAgain = document.querySelector("#tryAgain");

new Madlib(0, text, phrases, button, tryAgain, typeGrammar);
