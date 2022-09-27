import "../styles/about.css";
import { createElement } from "../utils/create-element";

import img from "../../assets/images/group.jpg";
import pfp from "../../assets/images/pfp.jpg";
import beer from "../../assets/svg/icons/beer-mug.svg";

export default function loadAboutPage() {
  const createAbout = () => {
    return createElement(
      "section",
      {
        className: "about"
      },
      [
        createElement("img", {
          src: img,
          alt: "group photo"
        }),
        createElement("div", {
          innerHTML: `
          <div class="text-wrapper">
            <h4>Our story</h4>
            <h1>PROCESS OF CREATING</h1>
            <p>
              Our main goal has always been to create a pub with the best
              selection of beers and simple food.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              vitae maxime illum, laudantium ab labore ducimus quos
              reprehenderit beatae eveniet optio ex quasi ad eum asperiores
              eaque voluptas velit rem eos mollitia. Dolorem rem earum,
              explicabo voluptatum, illum quod hic magni ad consequatur soluta,
              vel nihil eveniet aperiam. Impedit, omnis.
            </p>
          </div>
          `
        })
      ]
    );
  };

  const createStaff = () => {
    const title = createElement("div", { className: "staff-title" }, [
      createElement("h4", { innerText: "Our professional team" }),
      createElement("h1", { innerText: "MEET OUR TEAM" }),
      createElement("h5", {
        innerText: "Learn more about our brewers, bartenders and chefs."
      })
    ]);

    const positions = ["Beer Master", "Chef", "Manager"];

    const container = createElement(
      "div",
      {
        className: "staff-container"
      },
      positions.map(position =>
        createElement("div", {
          className: "staff-card",
          innerHTML: `
            <img src="${pfp}" alt="picture" />
            <h2>John Doe</h2>
            <h5>${position}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur eum voluptates blanditiis architecto nobis facere modi
              corrupti optio. Et, quas!
            </p>
          `
        })
      )
    );

    const hiring = createElement("div", {
      className: "hiring",
      innerHTML: `
        <h1>WE ARE HIRING!</h1>
        <p>
          We are always looking for communicable waiters <br />
          and professional bartenders.
        </p>
        <a href="#">JOIN OUR TEAM</a>
        <img src="${beer}" >
      `
    });

    return createElement(
      "section",
      {
        className: "staff section-center"
      },
      [title, container, hiring]
    );
  };

  const main = document.querySelector("main");

  const children = [
    createElement("h1", {
      innerText: "ABOUT BEER BOUTIQUE"
    }),
    createAbout(),
    createStaff()
  ];

  children.forEach(child => main.appendChild(child));
}
