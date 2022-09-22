import "../styles/main-page.css";
import { createElement } from "../utils/create-element";

export default function loadMainPage() {
  const createHero = () => {
    const video = createElement(
      "video",
      {
        autoplay: "true",
        muted: "true",
        loop: "true"
      },
      createElement("source", {
        src: "assets/draft-beer.mp4",
        type: "video/mp4"
      })
    );

    const overlay = createElement("div", {
      className: "hero-overlay"
    });

    const div = createElement(
      "div",
      {
        className: "hero-text"
      },
      [
        createElement("h1", {
          innerHTML: "BEER<br/>BOUTIQUE"
        }),
        createElement("h5", {
          innerHTML: "The best beer comes with<br/>the best foods!"
        }),
        createElement("p", {
          innerText: "Enjoy your beer!"
        })
      ]
    );

    return createElement(
      "section",
      {
        className: "hero"
      },
      [video, overlay, div]
    );
  };

  const createMenu = () => {
    const title = createElement(
      "div",
      {
        className: "menu-title"
      },
      [
        createElement("h1", { innerText: "MENU" }),
        createElement("h4", { innerText: "Explore our food and drink offers" })
      ]
    );

    const cardsDescription =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum illo quo, maxime ea minus et beatae recusandae, in nihil quae totam repellendus, quam deserunt accusamus odit delectus nostrum cumque! Pariatur, repellendus? Consequatur libero excepturi veritatis, inventore dignissimos vel perspiciatis?";

    const menuItems = [
      { img: "beer-glass", h2: "BEER MENU" },
      { img: "happy-hour", h2: "" },
      { img: "hamburger", h2: "FOOD MENU" }
    ];

    const ul = createElement(
      "ul",
      {},
      menuItems.map(({ img, h2 }) =>
        createElement("li", {}, [
          createElement("div", { className: "menu-text" }, [
            createElement("p", { innerText: cardsDescription })
          ]),
          createElement("img", {
            src: `assets/images/${img}.jpg`,
            alt: img.replaceAll("-", " ")
          }),
          createElement("h2", { innerText: h2 })
        ])
      )
    );

    const button = createElement("button", {
      className: "btn",
      innerText: "Learn more"
    });

    button.dataset.menu = "";

    const offersText = createElement(
      "div",
      {
        className: "offers-text"
      },
      [
        createElement("h4", { innerText: "What we offer" }),
        createElement("h1", {
          innerHTML: "COLD <span>BEER</span> AND<br/>TASTY <span>SNACKS</span>"
        }),
        createElement("p", {
          innerHTML:
            "We offer a simple and tasty menu<br/>for true beer connoisseurs."
        }),
        button
      ]
    );

    const offerItems = [
      { img: "bottled-beer", h2: "BOTTLED BEER" },
      { img: "snack", h2: "SNACKS" },
      { img: "beer-on-tap", h2: "BEER ON TAP" },
      { img: "cocktail", h2: "COCKTAILS" }
    ];

    const offersInfo = createElement(
      "div",
      { className: "offers-info" },
      offerItems.map(({ img, h2 }) =>
        createElement("div", {
          innerHTML: `
          <img src="assets/svg/icons/${img}.svg" alt="icon" />
          <div>
              <h2>${h2}</h2>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, eligendi!
              </p>
          </div>
        `
        })
      )
    );

    const offers = createElement("div", { className: "offers" }, [
      offersText,
      offersInfo
    ]);

    return createElement(
      "section",
      {
        className: "menu section-center"
      },
      [title, ul, offers]
    );
  };

  const createAbout = () => {
    return createElement("section", { className: "about" }, [
      createElement("div", {
        innerHTML: `
        <div class="text-wrapper">
          <h4>Our story</h4>
          <h1>ABOUT BEER BOUTIQUE</h1>
          <p>
            Welcome to Beer Boutique! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, sapiente.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            deserunt totam accusantium rem quibusdam hic quod! Nihil accusantium
            reprehenderit accusamus eius, vitae dolor dolorem vel ut aperiam id
            rem sequi doloribus quis doloremque, expedita voluptatum illo,
            voluptatibus a repudiandae animi. Odio doloremque eum neque animi eius
            maxime obcaecati excepturi voluptates?
          </p>
          <button class="btn" data-about>Learn more</button>
        </div> 
        `
      }),
      createElement("img", { src: "assets/images/bar.jpg", alt: "bar image" })
    ]);
  };

  const createTestimonials = () => {
    const dates = ["June 29, 2022", "September 10, 2022"];

    const container = createElement(
      "div",
      {
        className: "testimonials-container"
      },
      dates.map(date =>
        createElement("div", {
          className: "testimonial-card",
          innerHTML: `
            <img src="assets/images/pfp.jpg" alt="profile picture" />
            <h3>John Doe</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              blanditiis nisi ex harum totam, aliquam quaerat temporibus molestias?
              Eveniet, iste alias ea nulla, vitae magnam impedit ratione quam vero
              earum ad veritatis incidunt optio ex obcaecati assumenda officiis
              dicta! Quam amet ipsum at reiciendis, ullam voluptate eos nam porro
              voluptas?
            </p>
            <p>${date}</p>  
          `
        })
      )
    );

    return createElement(
      "section",
      {
        className: "testimonials section-center"
      },
      [
        createElement("h4", { innerText: "Testimonials" }),
        createElement("h1", {
          innerHTML:
            " WHAT OUR <span>CLIENTS</span><br/>SAY ABOUT <span>US</span>"
        }),
        container
      ]
    );
  };

  const createBrands = () => {
    const brands = [
      "corona",
      "miller",
      "hoegaarden",
      "carlsberg",
      "budweiser",
      "heineken"
    ];

    return createElement(
      "section",
      { className: "brands" },
      brands.map(brand =>
        createElement(
          "div",
          {},
          createElement("img", {
            src: `assets/svg/brands/${brand}.svg`,
            alt: "beer brand"
          })
        )
      )
    );
  };

  const main = document.querySelector("main");

  const children = [
    createHero(),
    createMenu(),
    createAbout(),
    createTestimonials(),
    createBrands()
  ];

  children.forEach(child => main.appendChild(child));
}
