'use strict';

const calcAmplitude = function (temp1, temp2) {
  let mini = Infinity;
  let maxi = -Infinity;
  const temperature = temp1.concat(temp2);
  for (let i = 0; i < temperature.length; i += 1) {
    if (typeof temperature[i] !== 'number') continue;
    mini = Math.min(mini, temperature[i]);
    maxi = Math.max(maxi, temperature[i]);
  }
  return maxi - mini;
};

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log('Amplitude : ', calcAmplitude(temperature, [100, -100]));
