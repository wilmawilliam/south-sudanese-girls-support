const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});
