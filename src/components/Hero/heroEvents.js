import { typeTextAnimation } from "../../utilities/common-functions/typing--animation";
import { heroImg } from "../../utilities/common-imports/images";

const typingWebDeveloperText = document.querySelector(".typing--web-developer");
typeTextAnimation(typingWebDeveloperText, "Web Developer");

const heroImgElement = document.querySelector(".hero-image");
heroImgElement.src = heroImg;
