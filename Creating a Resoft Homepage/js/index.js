$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
});

$(document).ready(function hambutton() {
  $(".ham_total>.ham").click(function () {
    var submenu = $(this).next("#ham_bg");

    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

/* bglist */
const bg = document.querySelectorAll(".bg");
const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
let timer = "";
let index = 0;

function slideShow() {
  for (let i = 0; i < bg.length; i++) {
    bg[i].style.display = "none";
  }
  index++;
  if (index > bg.length) {
    index = 1;
  }
  bg[index - 1].style.display = "block";
  timer = setTimeout(slideShow, 3000);
}

function stoptimer() {
  clearTimeout(timer);
}

function left(num) {
  index += num;

  for (let i = 0; i < bg.length; i++) {
    bg[i].style.display = "none";
  }
  if (index < 1) {
    index = bg.length;
  } else if (index > bg.length) {
    index = 1;
  }
  bg[index - 1].style.display = "block";
}

stop.addEventListener("click", function () {
  stop.style.display = "none";
  play.style.display = "block";
});

play.addEventListener("click", function () {
  play.style.display = "none";
  stop.style.display = "block";
});

/* 프로젝트 */

const pic2text = document.querySelector(".pictext");
const pic2img = document.querySelector(".pic2 img");

pic2img.addEventListener("mouseenter", () => {
  pic2img.style.transition = "all 0.3s linear";
  pic2img.style.transform = "scale(1.2)";
  pic2img.style.filter = "brightness(0.5)";
  pic2img.style.background = "rgba(0, 0, 0, 0.5)";
  pic2text.style.visibility = "visible";
  pic2text.style.animation = "fadein 0.3s forwards";
});

pic2img.addEventListener("mouseleave", () => {
  pic2img.style.transition = "all 0.3s linear";
  pic2img.style.transform = "scale(1)";
  pic2img.style.filter = "brightness(1)";
  pic2img.style.background = "rgba(0, 0, 0, 0)";
  pic2text.style.visibility = "hidden";
  pic2text.style.animation = "fadeout2 0.3s forwards";
});

const pic3text = document.querySelector(".pic3text");
const pic3img = document.querySelector(".pic3 img");

pic3img.addEventListener("mouseenter", () => {
  pic3img.style.transition = "all 0.3s linear";
  pic3img.style.transform = "scale(1.2)";
  pic3img.style.filter = "brightness(0.5)";
  pic3text.style.visibility = "visible";
  pic3text.style.animation = "fadein 0.3s forwards";
});

pic3img.addEventListener("mouseleave", () => {
  pic3img.style.transition = "all 0.3s linear";
  pic3img.style.transform = "scale(1)";
  pic3img.style.filter = "brightness(1)";
  pic3text.style.visibility = "hidden";
  pic3text.style.animation = "fadeout2 0.3s forwards";
});

let animation1 = bodymovin.loadAnimation({
  container: document.getElementById("ani1"),
  path: "./js/ani1.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

let animation3 = bodymovin.loadAnimation({
  container: document.getElementById("ani3"),
  path: "./js/ani3.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

const card1 = document.querySelector(".card1");
const card1text1 = document.querySelector(".card1text1");
const card1text2 = document.querySelector(".card1text2");

card1.addEventListener("mouseenter", () => {
  card1.style.transition = "all 0.2s linear";
  card1.style.transform = "scale(1.2)";
  card1text1.style.animation = "fadeout 0.5s forwards";
  card1text2.style.visibility = "visible";
  card1text2.style.animation = "fadein 0.5s";
});

card1.addEventListener("mouseleave", () => {
  card1.style.transition = "all 0.2s linear";
  card1.style.transform = "scale(1)";
  card1text1.style.animation = "fadein 0.5s";
  card1text2.style.animation = "fadeout 0.5s forwards";
});

const card2 = document.querySelector(".card2");
const card2text1 = document.querySelector(".card2text1");
const card2text2 = document.querySelector(".card2text2");

card2.addEventListener("mouseenter", () => {
  card2.style.transition = "all 0.2s linear";
  card2.style.transform = "scale(1.2)";
  card2text1.style.animation = "fadeout 0.5s forwards";
  card2text2.style.visibility = "visible";
  card2text2.style.animation = "fadein 0.5s";
});

card2.addEventListener("mouseleave", () => {
  card2.style.transition = "all 0.2s linear";
  card2.style.transform = "scale(1)";
  card2text1.style.animation = "fadein 0.5s";
  card2text2.style.animation = "fadeout 0.5s forwards";
});

const card3 = document.querySelector(".card3");
const card3text1 = document.querySelector(".card3text1");
const card3text2 = document.querySelector(".card3text2");

card3.addEventListener("mouseenter", () => {
  card3.style.transition = "all 0.2s linear";
  card3.style.transform = "scale(1.2)";
  card3text1.style.animation = "fadeout 0.5s forwards";
  card3text2.style.visibility = "visible";
  card3text2.style.animation = "fadein 0.5s";
});

card3.addEventListener("mouseleave", () => {
  card3.style.transition = "all 0.2s linear";
  card3.style.transform = "scale(1)";
  card3text1.style.animation = "fadein 0.5s";
  card3text2.style.animation = "fadeout 0.5s forwards";
});

const card4 = document.querySelector(".card4");
const card4text1 = document.querySelector(".card4text1");
const card4text2 = document.querySelector(".card4text2");

card4.addEventListener("mouseenter", () => {
  card4.style.transition = "all 0.2s linear";
  card4.style.transform = "scale(1.2)";
  card4text1.style.animation = "fadeout 0.5s forwards";
  card4text2.style.visibility = "visible";
  card4text2.style.animation = "fadein 0.5s";
});

card4.addEventListener("mouseleave", () => {
  card4.style.transition = "all 0.2s linear";
  card4.style.transform = "scale(1)";
  card4text1.style.animation = "fadein 0.5s";
  card4text2.style.animation = "fadeout 0.5s forwards";
});

let animation2 = bodymovin.loadAnimation({
  container: document.getElementById("ani2"), // Required
  path: "./js/ani2.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
});

let animation4 = bodymovin.loadAnimation({
  container: document.getElementById("ani4"),
  path: "./js/ani4.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
