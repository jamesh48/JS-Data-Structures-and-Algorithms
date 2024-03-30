/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let set = new Set();
  set.add('00');
  let ns = 0;
  let ew = 0;
  set.add(`${ns}${ew}`);

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'N') {
      ns++;
    } else if (path[i] === 'S') {
      ns--;
    } else if (path[i] === 'E') {
      ew--;
    } else if (path[i] === 'W') {
      ew++;
    }
    if (set.has(`${ns}${ew}`)) {
      return true;
    } else {
      set.add(`${ns}${ew}`);
    }
  }
  return false;
};
