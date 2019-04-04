const IsogramFinder = function (word) {
  this.word = word;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let lowercase = this.word.toLowerCase()
  let string = lowercase.split("")
  let array = []
  this.alphabet.filter( (letterOfAlphabet) => {
    if (string.includes(letterOfAlphabet) == true) {
      array.push(letterOfAlphabet);
    };
  });
  return (array.length == this.alphabet.length)
}

module.exports = IsogramFinder;

//







}
