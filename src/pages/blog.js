import "../styles/blog.css";
import { createElement } from "../utils/create-element";

import img from "../../assets/images/bar.jpg";

export default function loadBlogPage() {
  // there should be an api call to fetch blog posts
  // I'll just hard code them for now

  const createBlogPost = ({ image, type, title, author, dateString }) => {
    const date = new Date(dateString);

    return createElement("div", {
      className: "blog-post",
      onclick: toggleBlogOverlay,
      innerHTML: `
        <img src="${image}" alt="blog photo" />
        <div class="blog-text">
          <h4>${type}</h4>
          <h1>${title}</h1>
          <div class="blog-info">
            <p>${author}</p>
            <div class="line"></div>
            <p>${date.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}</p>
          </div>
        </div>
      `
    });
  };

  const blogProps = {
    image: img,
    type: "filler",
    title: "404 title not found",
    author: "No one",
    dateString: "2022-09-24"
  };

  const createGridSection = () => {
    const blogs = [];

    for (let i = 0; i < 3; i++) blogs.push(createBlogPost(blogProps));

    return createElement(
      "section",
      { className: "grid section-center" },
      blogs
    );
  };

  const createFlexSection = () => {
    const rand = 2 + Math.random() * 8;

    const blogs = [];

    for (let i = 0; i < rand; i++) blogs.push(createBlogPost(blogProps));

    return createElement(
      "section",
      { className: "flex section-center" },
      blogs
    );
  };

  const main = document.querySelector("main");

  const children = [
    createElement("div", { className: "spacer" }),
    createGridSection(),
    createFlexSection(),
    createElement("div", { className: "spacer" }),
    createElement("div", {
      className: "blogs-overlay",
      onclick: toggleBlogOverlay,
      innerHTML: `
      <div class="section-center">
        <h1>${blogProps.title}</h1>
        <h4>${blogProps.type}</h4>
        <div class="spacer"></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere
          in commodi, ipsum eveniet, id corporis deleniti earum porro ipsa ad at,
          illo magni nostrum quaerat? Unde dolores repellendus ipsam minus
          obcaecati repellat porro deleniti, necessitatibus quis, natus officiis
          impedit qui adipisci laudantium fugit dolorem vitae aspernatur. Sint,
          ipsum amet maiores doloribus modi animi numquam fuga natus veritatis
          sapiente necessitatibus vitae. Ipsa labore qui amet eius illum
          recusandae neque repellendus accusantium debitis nihil sapiente
          excepturi tenetur natus ducimus dolore, id earum! Quisquam velit soluta
          labore, eveniet amet necessitatibus eaque numquam aliquam quos natus
          excepturi doloribus enim fugit accusantium quibusdam atque reiciendis
          temporibus error voluptatibus, quis quia magnam dolorum corporis sunt.
          Suscipit voluptatem ut ipsam laborum doloremque amet sunt ipsa et ullam
          optio nisi quae, non architecto soluta enim molestiae laudantium vel
          reiciendis ipsum dolores rem repellat? Asperiores quisquam quas esse sed
          molestiae iure, dolore beatae velit quasi eveniet eius molestias
          corporis accusantium aliquam officia sequi possimus. Quis hic id
          blanditiis alias consequatur sed recusandae exercitationem animi
          voluptas maxime, dolor, ratione voluptate. Doloremque explicabo aperiam,
          soluta sint ratione voluptatem, suscipit tempore in laudantium ad
          praesentium, officiis sequi modi perferendis provident. Suscipit nisi,
          fugit praesentium dolorem incidunt eum ad cum magni officia dolore saepe
          quis, expedita, molestias assumenda facere. Velit sint pariatur
          voluptate corporis unde doloribus, natus sapiente? Cumque expedita quos
          sequi molestias, ipsa libero modi quidem esse nihil et nostrum,
          voluptatibus in veniam pariatur qui! Rem, dolore reprehenderit possimus
          incidunt qui officia vitae dolorem cupiditate animi ipsa adipisci
          consequatur porro magnam voluptatem sed hic deleniti nulla reiciendis.
          Eius aspernatur debitis eos libero eligendi doloremque corrupti ipsa
          maxime obcaecati natus accusamus sequi alias quis totam dolores porro
          laboriosam officia voluptatem minus, nesciunt error cumque. Maxime alias
          commodi aperiam ipsa quasi in rerum consectetur illo at vero? Corrupti
          repellendus amet, dolore assumenda alias accusantium facilis officiis
          natus dolorum obcaecati earum odio cupiditate totam accusamus. Enim
          dolor dolorum quo, dolores nihil eaque saepe itaque quam aliquam
          adipisci laboriosam reiciendis? Reiciendis beatae, obcaecati laborum
          mollitia repudiandae ut magnam minus velit dignissimos odio quia cumque
          molestiae natus totam. Voluptas atque eius officiis similique ea quos
          expedita odit porro adipisci voluptatem? Voluptatibus nostrum vel
          aliquam mollitia in architecto ducimus repellat aperiam doloribus nemo
          praesentium, libero quis voluptate harum magni deleniti tempore sed,
          enim alias autem saepe cumque modi. Adipisci quasi tenetur excepturi
          expedita possimus officia cumque. Nulla nobis distinctio ipsa, dolorum
          delectus quae culpa dignissimos, corrupti voluptatem id unde ipsam
          expedita quis et debitis, atque autem eum explicabo dolor officiis
          similique totam. Blanditiis laboriosam autem, fugiat consequuntur
          consectetur doloremque, architecto fuga neque impedit magnam temporibus
          omnis! Facilis architecto harum cupiditate. Sequi voluptates ex culpa
          veritatis. Blanditiis enim magnam dolores, adipisci labore sed optio
          esse quia aliquid inventore ipsa, perspiciatis iure obcaecati minus
          ipsam quod? Suscipit, dolorem minima magnam sapiente repellat, nihil
          necessitatibus nobis reprehenderit repudiandae sunt labore officia atque
          quibusdam temporibus earum quidem ex porro voluptatibus, delectus nam.
          Quod delectus voluptas unde quasi quidem, ab inventore ad provident qui
          nostrum dicta similique? Id eligendi reprehenderit itaque animi?
        </p>
      </div>
      `
    })
  ];

  children.forEach(child => main.appendChild(child));
}

function toggleBlogOverlay() {
  document.querySelector(".blogs-overlay").classList.toggle("active");
}
