// Your code goes here
function convert(...value) {
  for (let i = 0; i < value.length; i++) {
    if (typeof value[i] === 'string') {
      value[i] = parseInt(value[i]);
    } else {
      value[i] = '' + value[i];
    }
  }
  return value;
}
console.log(convert('1', 2, 3, '4'));

function executeForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
}
executeForEach([1, 2, 3], function (el) {
  console.log(el * 2);
});

function mapArray(array, func) {
  let resultArr = [];
  executeForEach(array, function (element) {
    if (typeof element === 'string') {
      element = parseInt(element);
    }
    let result = func(element);
    resultArr.push(result);
  });
  return resultArr;
}
console.log(
  mapArray([2, '5', 8], function (el) {
    return el + 3;
  })
);

function filterArray(array, func) {
  let resultArr = [];
  executeForEach(array, function (element) {
    if (func(element)) {
      resultArr.push(element);
    }
  });
  return resultArr;
}
console.log(
  filterArray([2, 5, 8], function (el) {
    return el % 2 === 0;
  })
);

function containsValue(array, value) {
  let counter = 0;
  executeForEach(array, function (element) {
    if (element === value) {
      counter += 1;
    }
  });
  return counter > 0;
}
console.log(containsValue([2, 5, 8], 2));

function flipOver(string) {
  let resultStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    resultStr += string[i]; // or newString = newString + str[i];
  }
  return resultStr;
}
console.log(flipOver('hey world'));

function makeListFromRange(array) {
  let resultArray = [];
  for (let i = array[0]; i <= array[1]; i++) {
    resultArray.push(i);
  }
  return resultArray;
}
console.log(makeListFromRange([2, 7]));

function getArrayOfKeys(objectArr, key) {
  let resultArray = [];
  executeForEach(objectArr, function (element) {
    resultArray.push(element[key]);
  });

  return resultArray;
}
const fruits = [
  { name: 'apple', weight: 0.5 },
  { name: 'pineapple', weight: 2 }
];
console.log(getArrayOfKeys(fruits, 'name'));

function substitute(array) {
  let resultArray = [];
  mapArray(array, function (element) {
    if (element > 10 && element < 20) {
      resultArray.push('*');
    } else {
      resultArray.push(element);
    }
  });
  return resultArray;
}
console.log(substitute([58, 14, 48, 12, 31, 19, 10]));

function getPastDay(date, value) {
  return new Date(date.setDate(date.getDate() - value));
}
const date = new Date(2020, 0, 2);
console.log(getPastDay(date, 365));

function formatDate(date) {
  return `${date.getFullYear()}/0${date.getMonth()}/0${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
}
console.log(formatDate(new Date()));
