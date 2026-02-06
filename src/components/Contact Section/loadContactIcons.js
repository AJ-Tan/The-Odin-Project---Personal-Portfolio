import {
  bellIcon,
  messageIcon,
  worldIcon,
} from "../../utilities/common-functions/imageImports";

const bellIconElement = document.querySelectorAll(".bell-icon");
const messageIconElement = document.querySelectorAll(".message-icon");
const worldIconElement = document.querySelectorAll(".world-icon");

if (bellIconElement) {
  bellIconElement.forEach((elem) => {
    elem.src = bellIcon;
  });
}

if (messageIconElement) {
  messageIconElement.forEach((elem) => {
    elem.src = messageIcon;
  });
}

if (worldIconElement) {
  worldIconElement.forEach((elem) => {
    elem.src = worldIcon;
  });
}
