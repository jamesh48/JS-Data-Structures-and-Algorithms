
const testCase = "<start>abcdefg</start><foo bar=\"test\">xxx<bar>aaa</bar>xxx</foo><crux/>";

const filterChars = (str: string) => {
  // compare the letters of the tags, the split(' ')[0] at the end ensures that we only get the tag and not any attributes like <foo bar="test"> -> ['foo', 'bar="test"'] => ['foo'][0] -> foo
  const test = str.split('').filter((char) => char !== '<' && char !== '>' && char !== '/').join('').split(' ')[0];
  return test;
}

const main = () => {
  const split = testCase.split('')
  const testArr = [] as string[];

  let ptr = 0;
  // Parse the input, a "split" that removes characters between > and <
  while (split.length) {
    if (split[ptr] === '>') {
      const opening = split.slice(0, ptr + 1)
      // .indexOf('<') to remove any characters before '<', like <foo>aaa</foo> -> aaa</foo> -> </foo>
      testArr.push(opening.slice(opening.indexOf('<')).join(''));
      // Mutate the input to remove characters up to this point.
      split.splice(0, opening.length)
      ptr = 0
    } else {
      ptr = ptr + 1;
    }
  }

  const queue = [];
  for (let i = 0; i < testArr.length; i++) {
    // Self Enclosing Tags don't need to be pushed into the queue, they are immediately resolved
    if (testArr[i].endsWith('/>')) {
      continue;
    } else if (testArr[i].startsWith('</')) {
      // Input should not start with a closing tag
      if (!queue.length) {
        return false;
      }

      if (filterChars(testArr[i]) === filterChars(queue[queue.length - 1])) {
        queue.pop()
        continue;
      }
    } else if (testArr[i].startsWith('<')) {
      queue.push(testArr[i]);
    }
  }
  return !queue.length;
}

const result = main();
console.log(result);
