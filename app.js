const dropdownContainer = document.querySelector(".card-dropdown-menu");
const firstDropDown = document.querySelector(".first-dropdown-menu");
const secondDropDown = document.querySelector(".second-dropdown-menu");
const thirdDropDown = document.querySelector(".third-dropdown-menu");

function toggleDropDown() {
  dropdownContainer.classList.toggle("show");
  if (dropdownContainer.classList.contains("show")) {
    dropdownContainer.classList.remove("show");
  }
  removeclass();

  firstDropDown.classList.toggle("show");

  if (secondDropDown.classList.contains("show")) {
    secondDropDown.classList.remove("show");
    secondDropDown.classList.add("hide");
  }
  if (thirdDropDown.classList.contains("show")) {
    thirdDropDown.classList.remove("show");
    thirdDropDown.classList.add("hide");
  }
  //   thirdDropDown.classList.add("hide");
}
function toggleDropDown2() {
  dropdownContainer.classList.toggle("show");
  removeclass();

  if (firstDropDown.classList.contains("show")) {
    firstDropDown.classList.remove("show");
    firstDropDown.classList.add("hide");
  }
  if (thirdDropDown.classList.contains("show")) {
    thirdDropDown.classList.remove("show");
    thirdDropDown.classList.add("hide");
  }

  secondDropDown.classList.toggle("show");
}
function toggleDropDown3() {
  dropdownContainer.classList.toggle("show");
  removeclass();
  thirdDropDown.classList.toggle("show");
  if (secondDropDown.classList.contains("show")) {
    secondDropDown.classList.remove("show");
    secondDropDown.classList.add("hide");
  }

  if (firstDropDown.classList.contains("show")) {
    firstDropDown.classList.remove("show");
    firstDropDown.classList.add("hide");
  }

  //   firstDropDown.classList.add("hide");
}
function removeclass() {
  dropdownContainer.classList.remove("card-dropdown-menu");
}

// accordion
const items = document.querySelectorAll(".accordion .accordion-item");
const burgerBar = document.querySelector(".burger-bar");

burgerBar.addEventListener("click", function () {
  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-header");

    trigger.addEventListener("click", () => {
      trigger.nextElementSibling.classList.toggle("active");
    });
  });
});

// cookies
const cookiesWrapper = document.querySelector(".cookies-wrapper");
const acceptCookies = document.querySelector(".cookies-text");

acceptCookies.addEventListener("click", function () {
  cookiesWrapper.style.display = "none";
});
