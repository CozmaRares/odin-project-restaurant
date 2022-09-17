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
