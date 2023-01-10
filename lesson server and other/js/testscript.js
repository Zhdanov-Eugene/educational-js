"use strict";
//filter
// const names = ["Ivan", "anna", "ksenia", "volodymer"];
// const shortNames = ["Ivan", "anna", "ksenia", "volodymer"].filter(function (
//   name
// ) {
//   return name.length < 5;
// });
// console.log(shortNames);
//
//map
// const answers = ["ivan", "ANNA", "HelLo"];
// const result = answers.map((item) => item.toLowerCase());
// console.log(result);
//2-
// let answers = ["ivan", "ANNA", "HelLo"];
// answers = answers.map((item) => item.toLowerCase());
// console.log(answers);
//
//every/some
// const some = [4, 5, 6, "qwqw", "wewewe"];
// console.log(some.some((item) => typeof item === "number"));
// console.log(some.every((item) => typeof item === "number"));
//
//reduce
// const arr = [4, 5, 6, 3, 2, 1];
// // 0    4
// // 4    5
// // 9    1
// // 10   3
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);
//
// const arr = [4, 5, 6, 3, 2, 1];
// // 3    4
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);
// const arr = ["apple", "pear", "plum"];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);
//
// const obj = {
//   ivan: "persone",
//   anna: "persone",
//   dog: "animal",
//   cat: "animal",
// };
// const newArr = Object.entries(obj);
// console.log(newArr);
//
const obj = {
  ivan: "persone",
  anna: "persone",
  dog: "animal",
  cat: "animal",
};
const newArr = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((item) => item[0]);
console.log(newArr);
