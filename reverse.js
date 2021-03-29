const words = process.argv.slice(2);

const reverseWord = function(word) {
  let output = '';
  for (let j = word.length - 1; j >= 0; j--) {
    output += word[j];
  }
  return output;
};

const reverse = function(words) {
  for (let i = 0; i < words.length; i++) {
    console.log(reverseWord(words[i]));
  }
};


reverse(words);