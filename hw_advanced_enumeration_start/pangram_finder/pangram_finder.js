const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  let lowercase = this.phrase.toLowerCase()
  let string = lowercase.split("")
  let array = []

  const noSpaces = string.filter( (character) => {
    return character != " ";
  });

  this.alphabet.filter( (letterOfAlphabet) => {
    if (noSpaces.includes(letterOfAlphabet) == true) {
      array.push(letterOfAlphabet);
    };
  });

  array.sort()
  const sortedAlphabet = this.alphabet.sort()

return (array.length == sortedAlphabet.length)
}


module.exports = PangramFinder;

//
