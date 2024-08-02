// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika = di klik
document.querySelector("#menu-tambahan").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk hilangkan nav
const menu = document.querySelector("#menu-tambahan");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
