function countFives(num) {
  let count = 0;

  while (num % 5 === 0) {
    num /= 5;
    count += 1;
  }
  return count;
}

function countDeuces(num) {
  let count = 0;

  while (num % 2 === 0) {
    num /= 2;
    count += 1;
  }
  return count;
}

function countExclamationPoint(str) {
  return str.endsWith('!!') ? 2 : 1;
}

module.exports = function zeros(expression) {
  let arrayNumbers = expression.split('*');
  let twoCount = 0;
  let fiveCount = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    let exclamationPoint = countExclamationPoint(arrayNumbers[i]);
    arrayNumbers[i] = parseInt(arrayNumbers[i], 10);

    for (;arrayNumbers[i] > 0; arrayNumbers[i] -= exclamationPoint) {
      let buffer = arrayNumbers[i];
      fiveCount += countFives(buffer);
      twoCount += countDeuces(buffer);
    }
  }

  return twoCount < fiveCount ? twoCount : fiveCount;
};
