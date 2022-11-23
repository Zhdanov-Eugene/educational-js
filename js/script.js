"use strict";
/* Задание на урок1:
1)
Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2)
Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3)
Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

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

/* Задание на урок2:
1)
Автоматизировать вопросы пользователю про фильмы при помощи цикла

2)
Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3)
При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4)
Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const length = 2;
// let result = "";
// for (let i = 0; i < length; i++) {
//   for (let a = 1; a < length; a++) {
//     result = prompt("Один из последних просмотренных фильмов?", "");
//     console.log(a);
//     for (let b = 1; b < length; b++) {
//       result = prompt("На сколько оцените его?", "");
//       console.log(b);
//     }
//   }
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);

/* Задание на урок3:
1)
Первую часть задания повторить по уроку
2)
Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3)
Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }
//rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }
//detectPersonalLevel();
// console.log(personalMovieDB);

// function showMyDB() {}
// showMyDB();
// console.log(personalMovieDB.privat === false);

// function writeYourGenres() {
//   for (let i = 0; i < 3; i++) {
//     const a = prompt("Ваш любимый жанр под номером ${номер по порядку}", "");
//   }
// }
// writeYourGenres();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

//showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }
//[i - 1] тому що let i = 1.
// writeYourGenres();

// function writeYourActors() {
//   for (let i = 1; i <= 3; i++) {
//     const x = prompt(`Ваш любимый актор ${i}`);
//     personalMovieDB.actors[i - 1] = x;
//   }
// }
// writeYourActors();

/* Задание на урок3:
1)
У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2)
Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3)
В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// let numberOfFilms;

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       numberOfFilms == "" ||
//       numberOfFilms == null ||
//       isNaN(numberOfFilms)
//     ) {
//       numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//         b = prompt("На сколько оцените его?", "").trim();

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
// writeYourGenres: function () {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(
//       `Ваш любимый жанр под номером ${i}`
//     ).trim();
//   }
//   personalMovieDB.genres.forEach(function (arr) {
//     console.log(`Любимый жанр ${arr}`);
//   });
// },
// writeYourGenres: function () {
//   for (let i = 1; i < 2; i++) {
//     let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//     if (genre === "" || genre == null) {
//       console.log("Вы ввели некорректные данные или не ввели их вовсе");
//       i--;
//     } else {
//       personalMovieDB.genres[i - 1] = genre;
//     }

// Альтернативный вариант из урока

// let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

// if (genres === '' || genres == null) {
//     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//     i--;
// } else {
//     personalMovieDB.genres = genres.split(', ');
//     personalMovieDB.genres.sort();
// }
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
// };
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB);

/* Задания на урок:
1) 
Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) 
Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) 
При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) 
Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) 
Фильмы должны быть отсортированы по алфавиту */
/**************DOM******************/
// const box = document.getElementById("box");
// console.log(box);
// //tag
// const btns = document.getElementsByTagName("button");
// console.log(btns);
// const btn = document.getElementsByTagName("button")[1];
// console.log(btn);
// const butn = document.getElementsByTagName("button");
// console.log(butn[1]);
// const adrs = document.getElementsByTagName("address");
// console.log(adrs);

// //class
// const circles = document.getElementsByClassName("circle");
// console.log(circles);

// const hearts = document.querySelectorAll(".heart");
// console.log(hearts);
// hearts.forEach((item) => {
//   console.log(item);
// });
// const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");
// // console.dir(box);
// const num = "1000px";
// box.style.backgroundColor = "blue";
// box.style.width = "500px";
// box.style.cssText = `background-color: green; width: ${num}`;
// btns[1].style.borderRadius = "100%";
// circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "grey";
// }
// hearts.forEach((item) => {
//   item.style.backgroundColor = "yellow";
// });

// const text = document.createTextNode("Hello ios");
// const div = document.createElement("div");
// div.classList.add("black");
// document.body.append(div);
// document.querySelector(".wrapper").append(div);
//document.querySelector(".wrapper").prepend(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
//hearts[0].replaceWith(circles[0]);

//old code
//wrapper.insertBefore(div, hearts[1]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0], hearts[0]);

//add text element div
//div.innerHTML = "<h1>Hello</h1>";
//div.textContent = "Poltava";
//div.innerHTML = "<h1>Hello</h1>";
//div.insertAdjacentHTML("beforebegin", "<h2>France</h2>");
//div.insertAdjacentHTML("afterbegin", "<h2>Italy</h2>");
//div.insertAdjacentHTML("beforeend", "<h2>Italy</h2>");
//div.insertAdjacentHTML("afterend", "<h2>Germany</h2>");

/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */
// const movieDB = {
//   movies: [
//     "Логан",
//     "Лига справедливости",
//     "Ла-ла лэнд",
//     "Одержимость",
//     "Трансформери",
//     "Джуманджи",
//     "Аврора",
//     "Фиана и Шрек",
//     "Скотт Пилигрим против...",
//   ],
//   catFilm: [
//     "Фильмы",
//     "Сериалы",
//     "Мультфильмы",
//     "Клипы",
//     "Трейлеры",
//     "Музыка",
//     "Передачи",
//     "Радио",
//   ],
// };

// const advImg = document.querySelectorAll(".promo__adv img"),
//   genre = document.querySelector(".promo__genre"),
//   bg = document.querySelector(".promo__bg"),
//   movieList = document.querySelector(".promo__interactive-list"),
//   category = document.querySelector(".promo__menu-list ul");

// advImg.forEach((item) => {
//   item.remove();
// });

// genre.textContent = "драма";
// bg.style.backgroundImage = "url('../img/bg.jpg')";

// // movieDB.movies.sort();
// console.log(movieDB);

// movieList.innerHTML = ""; //очищает код

// movieDB.movies.sort(); //сортировка по алфавиту если там строки

// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });
// //і номер по порядку +1 начинаєм с первого а не с нуля и li то что нужно передать или увидеть на странице
// //console.log(poster.innerHTML);
// category.innerHTML = ""; //очищает код
// movieDB.catFilm.sort();
// movieDB.catFilm.forEach((film) => {
//   category.innerHTML += `
//    <li><a class="promo__menu-item" href="#">${film}</a></li>
//     `;
// });
// console.log(category);
///////////////////////////////////////event
///////////////////////////////////////event
///////////////////////////////////////event
// const btn = document.querySelector("button"),
//   butn = document.querySelectorAll("button"),
//   overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Click Hello");
// };

// btn.addEventListener("click", () => {
//   alert("Click Buy");
// });
// btn.addEventListener("click", () => {
//   alert("Click Sea");
// });

// btn.addEventListener("mouseenter", () => {
//   console.log("Hover");
// });

// btn.addEventListener("mouseenter", (e) => {
//   console.log(e);
// });
// btn.addEventListener("click", (e) => {
//   e.target.remove();
// });

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };
// btn.addEventListener("click", deleteElement);

// const deleteElement = (e) => {
//   console.log(e.target);
//   console.log(e.type);
// };
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// const link = document.querySelector("a");
// link.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event.target);
// });

// butn.forEach((item) => {
//   item.addEventListener("click", deleteElement);
// });
//добавить собития на все кнопки

// butn.forEach((item) => {
//   item.addEventListener("click", deleteElement, { once: true });
// }); //одиночное собития
///////////////////////////////////////data_attributes
///////////////////////////////////////data_attributes
///////////////////////////////////////data_attributes
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//console.log(document.querySelector("#current").parentNode);
//console.log(document.querySelector("#current").parentNode.parentNode);
//console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").previosSibling);
//console.log(document.querySelector("[data-current='3']").nextElementSibling);
//console.log(document.querySelector("#current").parentElement);

// for (let node of document.body.childNodes) {
//   if (node.name == "#text") {
//     continue;
//   }
//   console.log(node);
// }
