import "./styles/index.css";

import loadMainPage from "./pages/main-page";
import loadAboutPage from "./pages/about";
import loadMenuPage from "./pages/menu";
import loadBookingPage from "./pages/booking";
import loadBlogPage from "./pages/blog";

import logo from "../assets/logo.svg";

function pageLoaderWrapper(loader) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  document.querySelector("main").innerHTML = "";
  loader();
  addClickEvents();
}

pageLoaderWrapper(loadMainPage);

const observer = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    // console.log(entry.target);

    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  })
);

observer.observe(document.querySelector("footer"));

document.querySelector("footer form").onsubmit = event => {
  event.preventDefault();
  document.querySelector("footer input").value = "";
};

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
    .querySelectorAll("[data-blog]")
    .forEach(
      element => (element.onmousedown = () => pageLoaderWrapper(loadBlogPage))
    );

  document
    .querySelectorAll("[data-book]")
    .forEach(
      element =>
        (element.onmousedown = () => pageLoaderWrapper(loadBookingPage))
    );
}

document.querySelectorAll("img").forEach(img => (img.src = logo));
