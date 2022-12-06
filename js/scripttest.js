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
//mobile touch
//mobile touch
//mobile touch
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel
//
//touches
//targetTouches
//changedTouches

// window.addEventListener("DOMContentLoaded", () => {
//   const box = document.querySelector(".box");

//   box.addEventListener("touchstart", (e) => {
//     e.preventDefault();

//     console.log("Start");
//     console.log(e.touches);
//     console.log(e.targetTouches);
//   });

//   box.addEventListener("touchmove", (e) => {
//     e.preventDefault();

//     console.log("Move");
//     console.log(e.targetTouches[0].pageX);
//   });

//   box.addEventListener("touchend", (e) => {
//     e.preventDefault();

//     console.log("End");
//   });
// });
//оператор нулевого слияния
//оператор нулевого слияния
//оператор нулевого слияния
// const box11 = document.querySelector(".box11");

// // const newHeight = 0;
// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//   // elem.style.height = `${h || 200}px`;
//   // elem.style.width = `${w || 200}px`;
//   elem.style.height = `${h ?? 200}px`;
//   elem.style.width = `${w ?? 200}px`;
//   elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box11, newHeight, newWidth);

// let userName;
// console.log(userName ?? "User");
// let userName = null;
// console.log(userName ?? "User");
// let userName = NaN; //or 0, (false)
// console.log(userName ?? "User");
// let userName;
// let userKey;
// console.log(userName ?? userKey ?? "User");
//оператор опциональной загрузки
//оператор опциональной загрузки
//оператор опциональной загрузки

// const box111 = document.querySelector(".box111");
// const block = document.querySelector(".block");

// console.log(block);
// // if (block) {
// //   console.log(block.textContent);
// // }
// //block?.textContent = 'utiputi';
// console.log(block?.textContent);
// console.log(1 + 2);

// const userData = {
//   name: "Ivan",
//   age: null,
//   say: function () {
//     console.log("Hello");
//   },
// };

// userData.say();
// userData.hey?.();
// // if (userData && userData.skills && userData.skills.js) {
// //   console.log(userData.skills.js);
// // }
// console.log(userData?.skills?.js);
//жывие коллекции
//жывие коллекции
//жывие коллекции
// const boxesQuery = document.querySelectorAll(".box22");
// const boxesGet = document.getElementsByClassName("box22");

// boxesQuery.forEach((box) => {
//   if (box.matches(".this")) console.log("This one");
// });

// console.log(boxesQuery[0].closest(".wrapper"));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//   const div = document.createElement("div");
//   div.classList.add("box22");
//   //document.body.append(div);
//   boxesQuery[boxesGet.length] = div;
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);
// console.log(Array.from(boxesGet));
//symbol
//symbol
//symbol

// let id = Symbol("id");

// const obj = {
//   name: "Test",
//   [id]: 1,
//   getId: function () {
//     return this[id];
//   },
// };
// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[getOwnPropertySymbols(obj)[0]]);
// const obj = {
//   name: "Test",
//   [Symbol("id")]: 1,
// };
// let id = Symbol("id");
// //let id = Symbol();
// let id2 = Symbol("id");
// obj[id] = 1;

// console.log(id == id2);
// console.log(obj[id]);
// console.log(obj);

// for (let value in object) console.log(value);

// const myAwesomeDB = {
//   movies: [],
//   actors: [],
//   [Symbol("id")]: 123,
// };

// const myAwesomeDB = {
//   movies: [],
//   actors: [],
//   [Symbol.for("id")]: 123,
// };
// //сторонний код библиотеки
// // myAwesomeDB.id = "232323";
// // console.log(myAwesomeDB["id"]);
// console.log(myAwesomeDB);

// console.log(myAwesomeDB[Symbol.for("id")]);
// //
// const user = {
//   name: "Alex",
//   surname: "Smith",
//   britday: "20/04/1993",
//   Data: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };
//writable
//enumerable
//configurable
// Object.defineProperty(user, "birtday", {
//   value: prompt("Date?"),
//   enumerable: true,
//   configurable: true,
// });
//Object.defineProperty(user, "birtday", { writable: false });
//console.log(Object.getOwnPropertyDescriptor(user, "birtday"));
//console.log(Object.getOwnPropertyDescriptor(user, "name"));
//Object.defineProperty(user, "name", { writable: false });
// Object.defineProperty(user, "gender", { value: "male" });
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));
//console.log(Object.getOwnPropertyDescriptor(user, "birtday"));

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Object.defineProperty(user, "showMyPublicData", { enumerable: false });

// for (let key in user) console.log(key);

// Object.defineProperties(user, {
//   name: { writable: false },
//   surname: { writable: false },
// });
// const birtday = Symbol("britday");
// const user = {
//   name: "Alex",
//   surname: "Smith",
//   [birtday]: "20/04/2021",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// Object.defineProperty(user, "showMyPublicData", { enumerable: false });

// for (let key in user) console.log(key);
// console.log(Object.getOwnPropertyDescriptor(user, birtday));
// Object.defineProperties(user, {
//   name: { writable: false },
//   surname: { writable: false },
// });
//итерируэмие конструкции
//итерируэмие конструкции
//итерируэмие конструкции
//итерируэмие конструкции
//итерируэмие конструкции
// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birtday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// for (const keys in user) {
//   console.log(user[keys]);
// }

// const arr = ["b", "c", "a"];
// for (const key in arr) {
//   console.log(arr[key]);
// }

// const str = "string";
// for (const key in str) {
//   console.log(str[key]);
// }

// const arr = ["b", "c", "a"];
// Array.prototype.someMethod = function () {};
// console.dir(arr);
// for (const key of arr) {
//   console.log(key);
// }

// const salaries = {
//   jhon: 500,
//   ivan: 1000,
//   anna: 5000,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// salaries[Symbol.iterator] = function () {
//   return {
//     current: this.jhon,
//     last: this.anna,
//     next() {
//       if (this.current < this.last) {
//         this.current = this.current + 500;
//         return { done: false, value: this.current };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// for (let res of salaries) {
//   console.log(res);
// }
//const iterator = salaries[Symbol.iterator]();
//console.log(iterator.next());
//map
//map
//map
//map
//map
// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birtday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };
// console.log(user);
// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);
//
// const user1 = {
//   4: "Alex",
//   surname: "Smith",
//   birtday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };
// console.log(typeof Object.keys(user1)[0]);
//
//
// const user2 = {
//  {}: "Alex",//!!!!
//   surname: "Smith",
//   birtday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   }
// };
// console.log(typeof Object.keys(user2)[0]);
// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// const map = new Map();
// map.set(shops[0], 5000);
// console.log(map);
//
// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// const map = new Map();
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// console.log(map);
//
// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// const map = new Map();
// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);
// console.log(map);
//

// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];
// const budget = [5000, 15000, 25000];
// const map = new Map([[{ paper: 400 }, 8000]]);
// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// });
// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
//map.keys();
// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
//   console.log(shop);
// }
// console.log(map.keys());
// console.log(goods);
//
// for (let price of map.values()) {
//   console.log(price);
// }
//
// for (let price of map.entries()) {
//   console.log(price);
// }
//
// for (let [price, shop] of map.entries()) {
//   console.log(price, shop);
// }
//
// map.forEach((value, key, map) => {
//   console.log(value, key);
// });
//
//set
//set
//set
//set
//set

// const arr = [1, 2, 3, 4, 5, 6, 2, 5, 9, 9, 8, 7];
// const set = new Set(arr);
// console.log(arr, set);
//
// const arr = [
//   "Alex",
//   "Ivan",
//   "Ivan",
//   "Andrey",
//   "Andrey",
//   "Valentin",
//   "Zina",
//   "Vlad",
// ];
// const set = new Set(arr);
// console.log(arr, set);
//
// const arr = [
//   "Alex",
//   "Ivan",
//   "Ivan",
//   "Andrey",
//   "Andrey",
//   "Valentin",
//   "Zina",
//   "Vlad",
// ];
// const set = new Set(arr);
// set.add("Olga").add("Valentin");
// console.log(arr, set);
//
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;
// for (let value of set) console.log(value);
// set.forEach((value, valueAgain, set) => {
//   console.log(value, valueAgain);
// });
//
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//BigInt
//BigInt
//BigInt
//BigInt
//BigInt
// const bigint = 2111212121212112121122121212121212121212n;
const sameBigint = BigInt(2111212121212112121122121212121212121212);
// console.log(typeof bigint);
//console.log(5n + 1);
//console.log(Math.round(5n));
console.log(2n + 3n);
console.log(5n / 3n);
console.log(5n > 3n);
let bigint = 1n;
let number = 2;
console.log(bigint + BigInt(number));
