"use strict";

export const removeDup = (arr1, arr) => {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      arr2.push(arr1[i]);
    }
  }
  return arr2;

  // return arr1.filter(item => arr.indexOf(item) === -1);
};

// export default function removeDuplicates
