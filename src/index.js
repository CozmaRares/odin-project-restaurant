import "./styles/index.css";

import loadMainPage from "./pages/main-page";
import loadAboutPage from "./pages/about";
import loadMenuPage from "./pages/menu";
import loadBookingPage from "./pages/booking";

loadMainPage();
addClickEvents();

function pageLoaderWrapper(loader) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    document.querySelector("main").innerHTML = "";
    loader();
    addClickEvents();
  }, 300);
}

const observer = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    // console.log(entry.target);

    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  })
);

observer.observe(document.querySelector("footer"));

document.querySelectorAll("form").forEach(
  form =>
    (form.onsubmit = event => {
      event.preventDefault();
      document.querySelectorAll("input").forEach(inp => (inp.value = ""));
    })
);

function addClickEvents() {
  document
    .querySelectorAll("[data-main-page]")
    .forEach(
      element => (element.onmousedown = () => pageLoaderWrapper(loadMainPage))
    );

  document
    .querySelectorAll("[data-about]")
    .forEach(
      element => (element.onmousedown = () => pageLoaderWrapper(loadAboutPage))
    );

  document
    .querySelectorAll("[data-menu]")
    .forEach(
      element => (element.onmousedown = () => pageLoaderWrapper(loadMenuPage))
    );

  document
    .querySelectorAll("[data-book]")
    .forEach(
      element =>
        (element.onmousedown = () => pageLoaderWrapper(loadBookingPage))
    );
}

// new Date(Date.now()).toLocaleDateString()
