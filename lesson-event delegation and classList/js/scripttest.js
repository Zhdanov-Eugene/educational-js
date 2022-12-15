"use strict";
//ClassList
//ClassList
//ClassList
//ClassList
//ClassList
//ClassList
const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".btn-block"),
  btn = document.createElement("button");
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.add("red"));
//console.log(btns[1].classList.add("red"));
// console.log(btns[0].classList.add("red", "green"));
// console.log(btns[0].classList.remove("blue"));
// console.log(btns[0].classList.toggle("blue"));
// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("green")) {
  //     btns[1].classList.add("green");
  //   } else {
  //     btns[1].classList.remove("green");
  //   }
  btns[1].classList.toggle("red");
});
wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("hello");
  }

  if (event.target && event.target.classList.contains("red")) {
    console.log("hello");
  }
  if (event.target && event.target.matches("button.red")) {
    console.log("hello");
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("hellou");
//   });
// });
btn.classList.add("red");
wrapper.append(btn);
