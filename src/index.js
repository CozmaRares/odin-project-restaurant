import "./styles/index.css";

import loadMainPage from "./pages/main-page";

loadMainPage();

const observer = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    // console.log(entry.target);

    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  })
);

observer.observe(document.querySelector("footer"));

document.querySelector("footer form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("footer input").value = "";
});

document
  .querySelectorAll("[data-main-page]")
  .forEach(element => element.addEventListener("mousedown", loadMainPage));
