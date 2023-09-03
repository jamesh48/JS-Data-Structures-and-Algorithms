const a1: Array<string> = ['foo', 'bar', 'bas'];
const a2: Array<number> = [1, 2, 3];

const x = a1.pop();
const y = a2.pop();

const p1 = Promise.resolve('hello!');
const p2 = Promise.resolve(3.14);

(async () => {
  const _x = await p1;
  const _y = await p2;
})();
