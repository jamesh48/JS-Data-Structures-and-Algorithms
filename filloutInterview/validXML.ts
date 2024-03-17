const testCase =
  '<start>abcdefg</start><foo bar="test">xxx<bar>aaa</bar>xxx</foo><crux/>';

const filterChars = (str: string) => {
  // compare the letters of the tags, the split(' ')[0] at the end ensures that we only get the tag and not any attributes like <foo bar="test"> -> ['foo', 'bar="test"'] => ['foo'][0] -> foo
  return str
    .split('')
    .filter((char) => char !== '<' && char !== '>' && char !== '/')
    .join('')
    .split(' ')[0];
};

const validXML = () => {
  const split = testCase.split('');
  const testArr = [] as string[];

  let ptr = 0;
  // Parse the input, a "split" that removes characters between > and <
  while (split.length) {
    if (split[ptr] === '>') {
      const opening = split.slice(0, ptr + 1);
      // .indexOf('<') to remove any characters before '<', like <foo>aaa</foo> -> aaa</foo> -> </foo>
      testArr.push(opening.slice(opening.indexOf('<')).join(''));
      // Mutate the input to remove characters up to this point.
      split.splice(0, opening.length);
      // reset back to 0 to chop off the next tag
      ptr = 0;
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
        queue.pop();
        continue;
      }
      // in the case of <foo></bar><foo> (closing bracket with no opening bracket)
      return false;
    } else if (testArr[i].startsWith('<')) {
      queue.push(testArr[i]);
    }
  }
  return !queue.length;
};

const resultXML = validXML();
console.log(resultXML);
