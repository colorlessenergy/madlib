// "_____________! he said ________ as he jumped into his convertible
//    exclamation            adverb
// ______ and drove off with his __________ wife."
// noun                          adjective

class Madlib {
  constructor (start, text, input, submit, restart, grammar) {
    this.start = start;
    this.text = text;
    this.input = input;
    this.submit = submit;
    this.restart = restart;
    this.grammar = grammar;
    this.sentenceComplete = false;
    this.type = ["adverb", "noun", "adjective"];
    this.words = [];

    this._text = this._text.bind(this);
    this._changeType = this._changeType.bind(this);
    this._renderTo = this._renderTo.bind(this);
    this._restart = this._restart.bind(this);
    this.submit.addEventListener("click", this._changeType);
    this.restart.addEventListener("click", this._restart);
  }

  _text() {
    this.grammar.innerHTML = this.type[this.start];
  }

  _changeType() {
    if (!this.sentenceComplete === true) {
      if (this.start === 3) {
        this.words[this.start] = this.input.value;
        console.log(this.grammar);
        this.grammar.textContent = this.type[this.start];
        this._renderTo();
        this.sentenceComplete = true;
        this.start = 0;
      } else {
        this.words[this.start] = this.input.value;
        this._text();
        this.start++;
        this.input.value = "";
      }
    }
  }

  _renderTo() {
    this.text.innerHTML = '"'+ this.words[0] + '! he said '+ this.words[1] +' as he jumped into his convertible '+ this.words[2] +' and drove off with his '+ this.words[3] +' wife."'
  }

  _restart() {
    this.text.innerHTML = '"_____________! he said ________ as he jumped into his convertible ______ and drove off with his __________ wife."'
    this.start = 0;
    this.sentenceComplete = false;
    console.log(this.grammar);
    this.grammar.textContent =  "noun";
    this.words = [];
  }
}
