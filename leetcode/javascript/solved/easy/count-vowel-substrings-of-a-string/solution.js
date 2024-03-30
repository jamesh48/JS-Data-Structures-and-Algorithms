const isVowel = (char) => {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
};

var countVowelSubstrings = function (word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let seen = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };
    if (isVowel(word[i])) {
      seen[word[i]]++;
      let j = i + 1;
      while (j < word.length && isVowel(word[j])) {
        seen[word[j]]++;
        if (Object.values(seen).every((char) => char >= 1)) {
          count++;
        }
        j++;
      }
    }
  }
  return count;
};
