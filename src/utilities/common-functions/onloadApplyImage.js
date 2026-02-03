import { htmlIcon, cssIcon, jsIcon } from "./imageImports";

const htmlIconElement = document.querySelector(".html-icon");
const cssIconElement = document.querySelector(".css-icon");
const jsIconElement = document.querySelector(".js-icon");

if (htmlIconElement) {
  htmlIconElement.src = htmlIcon;
}

if (cssIconElement) {
  cssIconElement.src = cssIcon;
}

if (jsIconElement) {
  jsIconElement.src = jsIcon;
}
