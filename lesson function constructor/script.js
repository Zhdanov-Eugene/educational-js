"use strict";

function User(name, id) {
  // this = {};  (неявно)
  // добавляет свойства к this
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
  // return this;  (неявно)
}
User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} уехал`);
};
const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);
ivan.exit();
alex.exit();
ivan.hello();
alex.hello();
console.log(ivan);
console.log(alex);
