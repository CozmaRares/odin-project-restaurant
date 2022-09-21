import "./styles/index.css";

import loadMainPage from "./pages/main-page";
import loadAboutPage from "./pages/about";
import loadMenuPage from "./pages/menu";

loadMainPage();

function pageLoaderWrapper(loader) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    document.querySelector("main").innerHTML = "";
    loader();
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

document.querySelector("footer form").onsubmit = event => {
  event.preventDefault();
  document.querySelector("footer input").value = "";
};

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
