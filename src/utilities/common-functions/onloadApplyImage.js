import {
  htmlIcon,
  cssIcon,
  jsIcon,
  bellIcon,
  messageIcon,
  worldIcon,
} from "./imageImports";

const htmlIconElement = document.querySelectorAll(".html-icon");
const cssIconElement = document.querySelectorAll(".css-icon");
const jsIconElement = document.querySelectorAll(".js-icon");

const bellIconElement = document.querySelectorAll(".bell-icon");
const messageIconElement = document.querySelectorAll(".message-icon");
const worldIconElement = document.querySelectorAll(".world-icon");

if (htmlIconElement) {
  htmlIconElement.forEach((elem) => {
    elem.src = htmlIcon;
  });
}

if (cssIconElement) {
  cssIconElement.forEach((elem) => {
    elem.src = cssIcon;
  });
}

if (jsIconElement) {
  jsIconElement.forEach((elem) => {
    elem.src = jsIcon;
  });
}
