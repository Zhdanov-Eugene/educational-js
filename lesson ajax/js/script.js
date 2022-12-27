"use strict";

const inputUan = document.querySelector("#uan"),
  inputUsd = document.querySelector("#usd");

inputUan.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUan.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });
});
// status
// statusText
// response
// readyState
