'use strict';
const printForcast = function (temp) {
  let ans = '';
  for (let i = 0; i < temp.length; i += 1) {
    ans += `... ${temp[i]}°C in ${i + 1} days `;
  }
  ans += '...';
  console.log(ans);
};
printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
