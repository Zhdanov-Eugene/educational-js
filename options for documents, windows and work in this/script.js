"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");
// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);
btn.addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";
  console.log(box.scrollTop);
});
//console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);
//
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);
//
//
//
console.log(document.documentElement.scrollTop);
//document.documentElement.scrollTop = 0;
//
//
//
//PROMISE
//
// console.log("запрос  данних...");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("подготовка  данних...");

//     const product = {
//       name: "tv",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//         //reject();
//         console.log(product);
//       }, 2000);
//       console.log("данные получены");
//     })
//       .then((data) => {
//         data.modify = true;
//         return data;
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   })
//   .catch(() => {
//     console.log("данные не получены - ерорр");
//   })
//   .finally(() => {
//     console.log("finaly");
//   });
//
//
// const test = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time);
//   });
// };
// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));
// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log("all");
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("all");
// });
