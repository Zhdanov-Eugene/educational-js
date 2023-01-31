import $ from "jquery";

// const btn = $("#btn");
// console.log(btn);
$(document).ready(function () {
  $(".mine-list-item:first").hover(function () {
    $(this).toggleClass("active");
  });

  $(".mine-list-item:eq(2)").on("click", function () {
    $(".image:even").fadeToggle("slow");
  });

  $(".mine-list-item:eq(4)").on("click", function () {
    $(".image:odd").animate(
      {
        opacity: "toggle",
        height: "toggle",
      },
      2000
    );
  });
});
("use strict");
// function* generator() {
//   yield "S";
//   yield "C";
//   yield "R";
//   yield "I";
//   yield "P";
//   yield "T";
// }
// const str = generator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);
//
// function* count(n) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }
// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
//
function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}
for (let k of count(7)) {
  console.log(k);
}
//
