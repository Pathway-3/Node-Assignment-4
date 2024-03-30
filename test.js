"use strict";

arrayMerge = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
};

removeDup = (arr1, arr) => {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      arr2.push(arr1[i]);
    }
  }
  return arr2;
};

module.exports = { removeDup, arrayMerge };
