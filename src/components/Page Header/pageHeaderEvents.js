const btnMenu = document.querySelector(".btn-menu");
const slickNav = document.querySelector(".slick-nav");

btnMenu.addEventListener("click", () => {
  if (slickNav.classList.contains("opened")) {
    slickNav.classList.remove("opened");
  } else {
    slickNav.classList.add("opened");
  }
});
