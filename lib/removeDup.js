"use strict";

export const removeDuplicate = (arr) => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
