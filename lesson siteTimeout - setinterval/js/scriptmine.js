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
const btn = document.querySelector(".btn");
let timerId,
  i = 0;
//
function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
btn.addEventListener("click", myAnimation);
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
