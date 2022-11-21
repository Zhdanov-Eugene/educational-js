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
// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1969,
//   color: {
//     wheels: "white",
//     body: "grey",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };
// myCar.makeTest();
//console.log(Object.keys(myCar.color).length);
//console.log(Object.create(myCar.engine));
// console.log(Object.getOwnPropertyNames(myCar));
// const { wheels, body } = myCar.color;
// console.log(wheels);
// let a = 5,
//   b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };
// const copy = obj; //link
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   i: 20,
// };

// //console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ["a", "b", "c"];
// const neqArray = oldArray.slice();
// neqArray[1] = "mkgrwgrg";

// console.log(oldArray);
// console.log(neqArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejornal", "blogger"],
//   internet = [..."vimeo", ..."blogs", "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];
// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

//TO STRING
//1
// console.log(typeof String(null));
// console.log(typeof String(4));
// //2
// console.log(typeof (null + ""));
// const num = 5;
// console.log("https//instagram.com/catalog" + num);
// const fontSize = 26 + "px";
// //TO NUMBER
// //1
// console.log(typeof Number("4"));
// //2
// console.log(typeof +"5");
// //3
// console.log(typeof parseInt("15px", 10));
// let answ = +prompt("Hello", "");
// //TO BOOLEAN
// //0,"",null,undefined,NaN;
// //1
// let switcher = null;
// if (switcher) {
//   console.log("Working...");
// }

// switcher = 1;
// if (switcher) {
//   console.log("Working...");
// }
// //2
// console.log(typeof Boolean("4"));

// //3
// console.log(typeof !!"4444");

// let number = 5;
// debugger;
// function logNumber() {
//   let number = 4;
//   debugger;
//   console.log(number);
// }
// number = 6;
// logNumber();
// debugger;

// function createCounter() {
//   let counter = 0;

//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };

//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log(c1, c2, c3);

//Какое будет выведено значение:?
// let x = 5;
// alert(x++);
// console.log(x); //6

// let y = 1;
// let x = (y = 2);
// alert(x);
// console.log(x); //2

// alert("1"[0]);//1

// console.log(2 && 1 && null && 0 && undefined); //false//null

// console.log(alert(null || (2 && 3) || 4));//3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? ---true

// console.log(0 || "" || 2 || undefined || true || falsе);//2

//Чему равно такое выражение: [ ] + false - null + true ?
// console.log([] + false - null + true); //NaN

// console.log([] + 1 + 2); //12

//Есть ли разница между выражениями? !!( a && b ) и (a && b)?
