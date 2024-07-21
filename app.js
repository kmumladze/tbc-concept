function toggleDropDown() {
  const dropdownContainer = document.querySelector(".card-dropdown-menu");
  const firstDropDown = document.querySelector(".first-dropdown-menu");
  dropdownContainer.classList.toggle("show");
  firstDropDown.classList.toggle("show");
}
