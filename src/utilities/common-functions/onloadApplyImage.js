import { htmlIcon, cssIcon, jsIcon } from "./imageImports";

const htmlIconElement = document.querySelectorAll(".html-icon");
const cssIconElement = document.querySelectorAll(".css-icon");
const jsIconElement = document.querySelectorAll(".js-icon");

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
