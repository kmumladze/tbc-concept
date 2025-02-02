const dropdownContainer = document.querySelector(".dropdown-section");
const firstDropDown = document.querySelector(".first-dropdown-menu");
const secondDropDown = document.querySelector(".second-dropdown-menu");
const thirdDropDown = document.querySelector(".third-dropdown-menu");

let prevClickedElement = null;

function toggleDropDown(element) {
  if (prevClickedElement === element) {
    removeWrapper();
    firstDropDown.classList.remove("show");
    prevClickedElement = null;
    return;
  } else {
    prevClickedElement = element;
  }

  showWrapper();

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
function toggleDropDown2(element) {
  if (prevClickedElement === element) {
    removeWrapper();
    secondDropDown.classList.remove("show");
    prevClickedElement = null;
    return;
  } else {
    prevClickedElement = element;
  }

  showWrapper();

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
function toggleDropDown3(element) {
  if (prevClickedElement === element) {
    removeWrapper();
    thirdDropDown.classList.remove("show");
    prevClickedElement = null;
    return;
  } else {
    prevClickedElement = element;
  }

  showWrapper();

  thirdDropDown.classList.toggle("show");
  if (secondDropDown.classList.contains("show")) {
    secondDropDown.classList.remove("show");
    secondDropDown.classList.add("hide");
  }

  if (firstDropDown.classList.contains("show")) {
    firstDropDown.classList.remove("show");
    firstDropDown.classList.add("hide");
  }
}
function removeWrapper() {
  dropdownContainer.style.display = "none";
}

function showWrapper() {
  dropdownContainer.style.display = "block";
}

// accordion
const items = document.querySelectorAll(".accordion .accordion-item");
const burgerBar = document.querySelector(".burger-bar");
const mobileSection = document.querySelector(".accordion-section");

burgerBar.addEventListener("click", function () {
  const shouldShowMobileToggleSection = mobileSection.style.display === "block";

  mobileSection.style.display = shouldShowMobileToggleSection
    ? "none"
    : "block";

  if (shouldShowMobileToggleSection) {
    burgerBar.children[0].style.display = "block";
    burgerBar.children[1].style.display = "none";
  } else {
    burgerBar.children[0].style.display = "none";
    burgerBar.children[1].style.display = "block";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991 && mobileSection.style.display === "block") {
    mobileSection.style.display = "none";
  }
});

items.forEach((item, idx) => {
  const trigger = item.querySelector(".accordion-header");
  trigger.addEventListener("click", () => {
    trigger.nextElementSibling.classList.toggle("active");

    items.forEach((innerItem, innerIdx) => {
      const innerTrigger = innerItem.querySelector(".accordion-header");

      if (idx !== innerIdx) {
        innerTrigger.nextElementSibling.classList.remove("active");
      }
    });
  });
});

// cookies
const cookiesWrapper = document.querySelector(".cookies-wrapper");
const acceptCookies = document.querySelector(".cookies-text");

acceptCookies.addEventListener("click", function () {
  cookiesWrapper.style.display = "none";
});

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btn = document.querySelector(".button-menu");
const onclickMenu = document.querySelector(".onclick-menu");

btn.addEventListener("click", function () {
  if (onclickMenu.style.display === "none") {
    onclickMenu.style.display = "flex";
  } else {
    onclickMenu.style.display = "none";
  }
});
