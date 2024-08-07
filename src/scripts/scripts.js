const Change = document.querySelectorAll(".changeColor");
const changeColor1 = document.getElementById("changeColor");
const root = document.documentElement;

const ChangeVal = Change.textContent;

Change.forEach((button) => {
  let a = 1;
  button.addEventListener("click", () => {
    if (a == 0) {
      root.style.setProperty("--Color__background__body-1", "#fff");
      root.style.setProperty("--Color__background__body-2", "#fbbf00");
      root.style.setProperty("--Color__txt__header", "#000");
      root.style.setProperty("--Color__txt__main", "#000");
      root.style.setProperty(
        "--Filter__txt__JS",
        "drop-shadow(5px 5px 20px black)"
      );

      a = 1;
      changeColor1.innerHTML = `☀️`;
      localStorage.removeItem("0");
      localStorage.setItem("0", "0");

      // console.log(a);
    } else {
      root.style.setProperty("--Color__background__body-1", "#fbbf00");
      root.style.setProperty("--Color__background__body-2", "#000");
      root.style.setProperty("--Color__txt__header", "#c0c0c0");
      root.style.setProperty("--Color__txt__main", "#c0c0c0");
      root.style.setProperty(
        "--Filter__txt__JS",
        "drop-shadow(0px 0px 20px red) invert(100%)"
      );

      changeColor1.innerHTML = `🌑`;
      a = 0;
      localStorage.removeItem("0");
    }
  });
});

function changeColor() {
  let a = 1;

  if (localStorage.getItem("0") == 0) {
    root.style.setProperty("--Color__background__body-1", "#fff");
    root.style.setProperty("--Color__background__body-2", "#fbbf00");
    root.style.setProperty("--Color__txt__header", "#000");
    root.style.setProperty("--Color__txt__main", "#000");
    root.style.setProperty(
      "--Filter__txt__JS",
      "drop-shadow(5px 5px 20px black)"
    );

    a = 1;
    Change.innerHTML = `☀️`;

    // console.log(a);
  } else {
    root.style.setProperty("--Color__background__body-1", "#fbbf00");
    root.style.setProperty("--Color__background__body-2", "#000");
    root.style.setProperty("--Color__txt__header", "#c0c0c0");
    root.style.setProperty("--Color__txt__main", "#c0c0c0");
    root.style.setProperty(
      "--Filter__txt__JS",
      "drop-shadow(0px 0px 20px red) invert(100%)"
    );

    Change.innerHTML = `🌑`;
    a = 0;
  }
}
changeColor();

/* ############################################################ */
/* ############################################################ */
/* ############################################################ */
let listElements = document.querySelectorAll(".list__button--click");

listElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    listElement.classList.toggle("arrow");

    let height = 0;
    let menu = listElement.nextElementSibling; // Agarra el elemento abyacente a ese

    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;

      
      
    } 

    menu.style.height = `${height}px`;
  });
});

/* ############################################################ */
const navBar = document.getElementById("navBar");
let nav = document.querySelector(".nav");
const body = document.getElementById("body");


let width = 0;

navBar.addEventListener("click", () => {

  if (width == 0) {
    nav.style.width = `100%`;
    body.style.overflow = "hidden";

    width = 1;
  } else {
    nav.style.width = `0px`;
    body.style.overflow = "scroll";

    width = 0;
  }
});

let a = 0;

navBar.addEventListener("click", () => {
  if (a == 0) {
    navBar.style.transform = "rotate(50deg)";
    a = 1;
  } else {
    navBar.style.transform = "none";
    a = 0;
  }
});
