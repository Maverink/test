function longestSequence(sequence) {
  let domFirstOutput = document.getElementById('firstOutput');

  let lettersArr = sequence.split('');
  let tempArr = [];
  let maxValsArr = [];
  let counter = 0;
  let finalOutput = {};

  for (let i = 0; i <= lettersArr.length; i++) {
    if (i > 0 && lettersArr[i] === lettersArr[i - 1]) {
      counter++;
    } else if (i > 0 && lettersArr[i] != lettersArr[i - 1]) {
      counter++;
      tempArr.push([lettersArr[i - 1].toLowerCase(), counter]);
      counter = 0;
    }
  }

  let letterVals = tempArr.map((key) => key[1]);
  let maxVal = Math.max(...letterVals);

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i][1] == maxVal) {
      maxValsArr.push(tempArr[i]);
    }
  }

  finalOutput[maxValsArr.sort()[0][0]] = maxValsArr.sort()[0][1];
  domFirstOutput.textContent = `Output: ${Object.entries(finalOutput)}`;

  return finalOutput;
}

function secondLowest(sequence) {
  //??????
  let domSecondOutput = document.getElementById('secondOutput');
  let numbersArr;
  if (!Array.isArray(sequence)) {
    numbersArr = sequence.split('').map((number) => parseInt(number, 10));
  } else {
    numbersArr = sequence;
  }

  let uniqueNumbersArr = [...new Set(numbersArr)];
  console.log(uniqueNumbersArr);
}

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let domThirdOutput = document.getElementById('thirdOutput');
  let tempBalance = openingSum;
  let currentInterest = 0;
  let currentTaxRate = 0;
  for (let i = 0; i < numMonths; i++) {
    currentInterest = tempBalance * (interestRate / 100);

    currentTaxRate =
      taxFreeLimit >= openingSum ? 0 : tempBalance * (taxRate / 100);

    tempBalance += currentInterest;
    tempBalance -= currentTaxRate;
    domThirdOutput.textContent = `Output: ${tempBalance}`;
    console.log(tempBalance);
  }
  return tempBalance;
}

function reverseString(string) {
  let domForthOutput = document.getElementById('forthOutput');

  let firstLetter = string.charAt(0);
  let otherletters = string.substring(1);
  let otherlettersReversed = otherletters.split('').reverse().join('');
  let output = string.length <= 1 ? string : otherlettersReversed + firstLetter;

  domForthOutput.textContent = `Output: ${output}`;

  return output;
}
