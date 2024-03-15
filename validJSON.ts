/*

Implement an algorithm that returns a boolean indicating whether a string of brackets is well-formed. Keep in mind that we'd like to be able to configure which characters can be pairs and add new pairs in the future.

Well formed examples:

()
{}
[]
(){}[]
((){}[])
([{}])
the empty string

Malformed:

)
{
][
{)
)(
{})
([]
({)}
{([)]}


O - boolean
I - string
C- None foreseeable
E - Brackets have to close each other, wellformed


*/


const openingBrackets = ['(', '{', '['];
const closingBrackets = [')', '}', ']'];
const map: { [key: string]: string } = {
'[': ']',
'{': '}',
'(': ')'
};

// )))))))

const main = () => {
  const testCase = "([[[]]])";
  const split = testCase.split('');
  const queue = [];
  for (let i = 0; i < split.length; i++) {
    if (openingBrackets.indexOf(split[i]) !== -1) {
      queue.push(split[i]);
    } 

    if (closingBrackets.indexOf(split[i]) !== -1 && map[queue[queue.length - 1]] === split[i]) {
      queue.pop();
      continue;
    }

    if (closingBrackets.indexOf(split[i]) !== -1) {
      return false;
    }

  }

  return !queue.length;
}
const result = main()
console.log(result)
