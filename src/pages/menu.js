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
          { name: "piña colada", price: 10 },
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

    const maxScroll = container.children.length - 2;

    let reachedEnd = true;

    if (scroll > 0) scroll -= maxScroll;
    else if (scroll < -maxScroll) scroll += maxScroll;
    else reachedEnd = false;

    if (reachedEnd) {
      scroll -= direction;
      container.style.setProperty("--scroll", `${scroll}}`);
      container.style.transform = `translateX(${(itemWidth + gap) * scroll}vw)`;
      scroll += direction;
    }

    setTimeout(() => {
      container.style.setProperty("--scroll", `${scroll}`);

      container.classList.add("scroll");
      setTimeout(() => container.classList.remove("scroll"), 300);

      container.style.transform = `translateX(${(itemWidth + gap) * scroll}vw)`;
    }, 1);
  };

  const findContainer = element => {
    element = element.nextElementSibling;

    while (element.className.indexOf("wrapper") === -1)
      element = element.nextElementSibling;

    return element.children[0];
  };

  document.querySelectorAll(".caret.left").forEach(el => {
    el.onmousedown = () => scroll(1, findContainer(el));
  });

  document.querySelectorAll(".caret.right").forEach(el => {
    el.onmousedown = () => scroll(-1, findContainer(el));
  });
}
