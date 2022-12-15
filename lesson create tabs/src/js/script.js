"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      // item.style.display = "none";
      item.classList.add("hide");
      item.classList.remove("show", "animation-class");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    // tabsContent[i].style.display = "block";
    // tabs[i].classList.add("tabheader__item_active");
    tabsContent[i].classList.add("show", "animation-class");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabsContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });
});
