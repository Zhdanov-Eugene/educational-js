"use strict";
/* 1 Задание на урок: */
// document.getElementById("demo").innerHTML = "Hello JavaScript!";
// console.log(1);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);
///////////////////////////////////////////////////выбор темы
// var select = document.querySelector("select");
// var html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.onchange = function () {
//   select.value === "black"
//     ? update("black", "white")
//     : update("white", "black");
// };

/* 2 Задание на урок: */
// console.log(NaN || 2 || undefined); //2

// console.log(NaN && 2 && undefined); //NaN

// console.log(1 && 2 && 3); //3

// console.log((!1 && 2) || !3); //false

// console.log(25 || (null && !3)); //25

// console.log(NaN || null || !3 || undefined || 5); //5

// console.log(NaN || (null && !3 && undefined) || 5); //5

// console.log((5 === 5 && 3 > 1) || 5); ////true-5

/*Выполняется ли условие?*/
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// } ////2-true

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// } //3

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// } //2

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// } //2
// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// } //false
//методами объекта
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  color: {
    wheels: "white",
    body: "grey",
  },
  makeTest: function () {
    console.log("Test");
  },
};
myCar.makeTest();
//console.log(Object.keys(myCar.color).length);
//console.log(Object.create(myCar.engine));
// console.log(Object.getOwnPropertyNames(myCar));
const { wheels, body } = myCar.color;
console.log(wheels);

// В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу.
