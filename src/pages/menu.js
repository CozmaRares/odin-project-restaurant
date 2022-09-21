import "../styles/menu.css";
import { createElement } from "../utils/create-element";

export default function loadMenuPage() {
  const createList = ({ title, lists }) => {
    const sectionTitle = createElement("div", {
      className: "menu-section-title",
      innerHTML: `
        <h4>${title}</h4>
        <h1>${title.toUpperCase()} MENU</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquid!
        </p>
      `
    });

    const createUL = ({ title, items }) => {
      const ul = createElement(
        "ul",
        {},
        items.map(({ name, price }) =>
          createElement("li", {
            innerHTML: `
              <div class="item">
              <p>${name.toUpperCase()}</p>
              <div class="underline"></div>
              <p>${Number.isInteger(price) ? price : price.toFixed(2)}</p>
              </div>
              <div class="item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            `
          })
        )
      );

      return createElement("div", { className: "menu-list" }, [
        createElement("p", { innerText: title.toUpperCase() }),
        ul
      ]);
    };

    const container = createElement(
      "div",
      {
        className: "menu-lists-container"
      },
      [
        createUL(lists[lists.length - 1]),
        ...lists.map(createUL),
        createUL(lists[0])
      ]
    );

    return createElement(
      "section",
      {
        className: "menu-section section-center",
        innerHTML: `
          <div class="caret right"></div>
          <div class="caret left"></div>
        `
      },
      [
        sectionTitle,
        createElement("div", { className: "menu-list-wrapper" }, [container])
      ]
    );
  };

  const barList = {
    title: "Bar",
    lists: [
      {
        title: "cocktails",
        items: [
          { name: "monkey sour", price: 10 },
          { name: "old fashioned", price: 11 },
          { name: "pina colada", price: 10 },
          { name: "mojito", price: 11 },
          { name: "bramble", price: 13 }
        ]
      },
      {
        title: "bottled beer",
        items: [
          { name: "indian pale ale", price: 4 },
          { name: "larger beer", price: 3.5 },
          { name: "bitter", price: 4 },
          { name: "stout", price: 5 },
          { name: "caramel ale", price: 5.5 }
        ]
      },
      {
        title: "beer on tap",
        items: [
          { name: "blue style", price: 5 },
          { name: "boutique ipa", price: 6 },
          { name: "absolute porter", price: 7 },
          { name: "belgian dream", price: 8 },
          { name: "beer boutique larger", price: 9 }
        ]
      }
    ]
  };

  const foodList = {
    title: "Food",
    lists: [
      {
        title: "snacks",
        items: [
          { name: "spicy nachos", price: 15 },
          { name: "fish & chips", price: 12 },
          { name: "fried calamary", price: 12 },
          { name: "chicken wrap", price: 18 },
          { name: "mach & cheese bites", price: 10 }
        ]
      },
      {
        title: "burger",
        items: [
          { name: "classic burger", price: 14 },
          { name: "beef king", price: 18 },
          { name: "double cheeseburger", price: 22 },
          { name: "chicken burger", price: 15 },
          { name: "boutique burger", price: 19 }
        ]
      },
      {
        title: "meat",
        items: [
          { name: "sesame chicken strips", price: 13 },
          { name: "hot wings", price: 15 },
          { name: "lamb gyro", price: 20 },
          { name: "lamb chops", price: 22 },
          { name: "pan roasted pork chop", price: 23 }
        ]
      }
    ]
  };

  const main = document.querySelector("main");

  main.appendChild(createElement("h1", { innerText: "MENU" }));
  main.appendChild(createElement("div", { className: "spacer" }));
  main.appendChild(createList(barList));
  main.appendChild(
    createElement("img", {
      src: "assets/images/food-and-drink.jpg",
      alt: "illustration",
      className: "menu-img"
    })
  );
  main.appendChild(createElement("div", { className: "spacer" }));
  main.appendChild(createList(foodList));
  main.appendChild(createElement("div", { className: "spacer" }));

  const scroll = (direction, container) => {
    const computedStyle = getComputedStyle(container);

    const itemWidth = parseInt(
        computedStyle.getPropertyValue("--item-width").replace("vw", "")
      ),
      gap = parseInt(computedStyle.getPropertyValue("--gap").replace("vw", ""));

    let scroll =
      parseInt(computedStyle.getPropertyValue("--scroll")) + direction;

    const scrollTo = scroll => {
      container.style.setProperty("--scroll", `${scroll}`);
      container.style.setProperty("transition", "none");
      container.style.transform = `translateX(${(itemWidth + gap) * scroll}vw)`;

      setTimeout(() => {
        container.style.setProperty("transition", "var(--transition)");
      }, 20);
    };

    if (scroll === 0)
      setTimeout(() => {
        scrollTo(-container.children.length + 2);
      }, 301);
    else if (scroll === -container.children.length + 2)
      setTimeout(() => {
        scrollTo(0);
      }, 301);

    container.style.setProperty("--scroll", `${scroll}`);

    container.style.transform = `translateX(${(itemWidth + gap) * scroll}vw)`;
  };

  document.querySelectorAll(".caret.left").forEach(el => {
    let container = el.nextElementSibling;

    while (container.className.indexOf("wrapper") === -1)
      container = container.nextElementSibling;

    container = container.children[0];

    el.onmousedown = () => scroll(1, container);
  });

  document.querySelectorAll(".caret.right").forEach(el => {
    let container = el.nextElementSibling;

    while (container.className.indexOf("wrapper") === -1)
      container = container.nextElementSibling;

    container = container.children[0];

    el.onmousedown = () => scroll(-1, container);
  });
}
