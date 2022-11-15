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

"use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/////////////////////////////////////////////////////////////task1
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

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

/* Задание на урок2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const length = 2;
let result = "";
for (let i = 0; i < length; i++) {
  for (let a = 1; a < length; a++) {
    result = prompt("Один из последних просмотренных фильмов?", "");
    console.log(a);
    for (let b = 1; b < length; b++) {
      result = prompt("На сколько оцените его?", "");
      console.log(b);
    }
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
