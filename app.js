const dropdownContainer = document.querySelector(".card-dropdown-menu");
const firstDropDown = document.querySelector(".first-dropdown-menu");
const secondDropDown = document.querySelector(".second-dropdown-menu");
const thirdDropDown = document.querySelector(".third-dropdown-menu");

function toggleDropDown() {
  dropdownContainer.classList.toggle("show");
  firstDropDown.classList.toggle("show");
}
function toggleDropDown2() {
  dropdownContainer.classList.toggle("show");
  secondDropDown.classList.toggle("show");
}
function toggleDropDown3() {
  dropdownContainer.classList.toggle("show");
  thirdDropDown.classList.toggle("show");
}
