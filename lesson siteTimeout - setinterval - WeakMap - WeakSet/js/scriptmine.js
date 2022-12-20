"use strict";

// const { sources } = require("webpack");

// const timerId = setTimeout(function () {
//   console.log("hello");
// }, 3000);
//
// const timerId = setTimeout(
//   function (text) {
//     console.log(text);
//   },
//   3000,
//   "dobro"
// );
//
//
// const timersId = setTimeout(logger, 2000);
// clearInterval(timersId);
// function logger() {
//   console.log("text");
// }
//
// const btn = document.querySelector(".btn");
// let timerId,
//   i = 0;
// //
// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// btn.addEventListener("click", myAnimation);
//
//
// const btn = document.querySelector(".btn");
// let timersId,
//   i = 0;
// btn.addEventListener("click", () => {
//   //const timersId = setTimeout(logger, 2000);
//   timersId = setInterval(logger, 1000);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timersId);
//   }
//   console.log("text");
//   i++;
// }
//
// let id = setTimeout(function log() {
//   console.log("sos");
//   id = setTimeout(log, 500);
// }, 500);
//
//
//WeakMap
//WeakMap
//
//
// let user = { name: "Ivan" };
// const arr = [user];
// user = null;
// console.log(user);
// console.log(arr[0]);
//
//
// let user = { name: "Ivan" };
// let map = new Map();
// map.set(user, "data");
// user = null;
// console.log(map.keys());
//
//
// let user = { name: "Ivan" };
// let map = new WeakMap();
// map.set(user, "data");
// user = null;
// console.log(map.has(user));
// console.log(map);
//
//

// let cache = new WeakMap();
// function cahcheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }

// let lena = { name: "Elena" };
// let alex = { name: "Alex" };
// cahcheUser(lena);
// cahcheUser(alex);
// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));
//
//
//WeakSet
//WeakSet
//add, has, delete
//

// let messages = [
//   {
//     text: "Hello",
//     from: "Alex",
//   },
//   {
//     text: "World",
//     from: "Olga",
//   },
//   {
//     text: ".....",
//     from: "Mentor",
//   },
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// //readMessages.add(messages[1]);
// readMessages.add(messages[0]);
// messages.shift();
// console.log(readMessages.has(messages[0]));
