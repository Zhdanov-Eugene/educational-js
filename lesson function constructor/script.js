"use strict";

// function User(name, id) {
// this = {};  (неявно)
// добавляет свойства к this
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
//   // return this;  (неявно)
// }
// User.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} уехал`);
// };
// const ivan = new User("Ivan", 28);
// const alex = new User("Alex", 20);
// ivan.exit();
// alex.exit();
// ivan.hello();
// alex.hello();
// console.log(ivan);
// console.log(alex);
//
//this
//
//1 звичайна функція  this = window, але якщо е строгий режим то буде undefined
// function schowTgis() {
//   console.log(this);
// }
// schowTgis();
// //
// function schowThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// schowThis(4, 5);
//1 звичайна функція  this = window, але якщо е строгий режим то буде undefined
//2 контекст у методов обэкта ето будет сам обэкт.
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function schout() {
//       console.log(this);
//     }
//   },
// };
// obj.sum();
//2 контекст у методов обэкта ето будет сам обэкт.
//3 this В КОНСТРУКТОРАХ І КЛАССАХ - ЦЕ НОВИЙ ЕКЗЕМПЛЯР ОБЄКТА
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// const ivann = new User("Ivann", 23);
//3 this В КОНСТРУКТОРАХ І КЛАССАХ - ЦЕ НОВИЙ ЕКЗЕМПЛЯР ОБЄКТА
//4ручна привязка this: call apply, bind
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: "Robert",
// };
// sayName.call(user, "Svit");
// sayName.apply(user, ["Fran"]);

// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(33));
//4ручна привязка this: call apply, bind
//
//
//
const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   this.style.backgroundColor = "red";
// });
btn.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
});

const obj1 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
obj1.sayNumber();

// const double = (a) => {
//   return a * 2;
// };

const double = (a) => a * 2;
console.log(double(4));
