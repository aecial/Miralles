const hamburgerBtn = document.getElementById("myHamburger");
const navbarDiv = document.getElementById("navbarDiv");
function clicked() {
  if (hamburgerBtn.classList.contains("swap-active")) {
    hamburgerBtn.classList.remove("swap-active");
    navbarDiv.classList.remove("flex");

    navbarDiv.classList.add("hidden");
  } else {
    hamburgerBtn.classList.add("swap-active");
    navbarDiv.classList.remove("hidden");
    navbarDiv.classList.add("flex");
  }
}
