const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const array = this.words.map( (word) => {
    return word.toUpperCase()
  });
  return array
}

//    FIRST SOLUTION...
// UpperCaser.prototype.toUpperCase = function () {
//   let characters = this.words[0].split('');
//   let array = []
//   let result = characters.map( (letter) => {
//     return letter.toUpperCase();
//   });
//   const array_of_letters = result;
//
//   const finalResult = array_of_letters.reduce( (sum, letter) => {
//     return sum + letter;
//   } , "");
//   array.push(finalResult);
//   return array;
// }


module.exports = UpperCaser;
