var doc = document.documentElement;
var w = window;

var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var header = document.getElementById("header");

var checkScroll = function () {
  /*
   ** Find the direction of scroll
   ** 0 - initial, 1 - up, 2 - down
   */

  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    //scrolled up
    direction = 2;
  } else if (curScroll < prevScroll) {
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

var toggleHeader = function (direction, curScroll) {
  if (direction === 2 && curScroll > 52) {
    //replace 52 with the height of your header in px

    header.classList.add(
      "-top-20",
      "transition",
      "duration-500",
      "ease-in-out"
    );
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove(
      "-top-20",
      "transition",
      "duration-500",
      "ease-in-out"
    );
    prevDirection = direction;
  }
};

window.addEventListener("scroll", checkScroll);
