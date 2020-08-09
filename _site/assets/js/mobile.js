const doc = document;
const body = document.body;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
  body.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
  body.style.overflow = "auto";
});
