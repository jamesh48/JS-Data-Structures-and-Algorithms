var lemonadeChange = function(bills) {
  let changeFactor = 0;
  for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          changeFactor++;
      } else {
          while (bills[i] > 5) {
              bills[i] -= 5;
              changeFactor--;
              if (changeFactor < 0) {
                  return false;
              }
          }
          changeFactor++;
      }
  }
  return true;
};