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
// const obj = {
//   ivan: "persone",
//   anna: "persone",
//   dog: "animal",
//   cat: "animal",
// };
// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "persone")
//   .map((item) => item[0]);
// console.log(newArr);
///
//
// //
// new RegExp('pattern', 'flag');
// /pattern/flag
//
// const ans = prompt("введите ваше имя");
// const ans = prompt("введите ваше число");
//const req = /n/;
//const req = /n/gi; //n - то что ми ищем
//const req = /\d/;
// const req = /\d/g;
//const req = /n/i;
//const req = /n/g;
//const req = /n/m;
//const req = /n/igm;
//const req = /n/ig;
//console.log(ans.search(req));
//console.log(ans.match(req));
//console.log(req.test(ans));
// console.log(ans.match(req)); ///\d g
//classes
//\d
//\w
//\s
//
// const pass = prompt("password");
// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*")); //екранирование
///
// console.log("12-56-34".replace(/-/g, ":"));
//
// const str = "my name r2d2";
// console.log(str.match(/\w\d\w\d/i));
//\D
//\W
// const str = "my name r2d2";
// console.log(str.match(/\W/i));
// console.log(str.match(/\W/gi));
// console.log(str.match(/\D/gi));
//
//
// const persone = {
//   name: "alex",
//   age: 25,

//   get userAge() {
//     return this.age;
//   },
//   set userAge(num) {
//     this.age = num;
//   },
// };
// console.log((persone.userAge = 30));
// console.log(persone.userAge);
