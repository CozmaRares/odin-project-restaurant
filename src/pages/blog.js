import "../styles/blog.css";
import { createElement } from "../utils/create-element";

export default function loadBlogPage() {
  // there should be an api call to fetch blog posts
  // I'll just hard code them for now

  const createBlogPost = ({ image, type, title, author, dateString }) => {
    const date = new Date(dateString);

    return createElement("div", {
      className: "blog-post",
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

  const createGridSection = () => {
    const blogTypes = ["Event", "Blog", "Update"];

    return createElement(
      "section",
      { className: "grid section-center" },
      blogTypes.map(type =>
        createBlogPost({
          image: "assets/images/bar.jpg",
          type,
          title: "404 title not found",
          author: "No one",
          dateString: "2022-09-24"
        })
      )
    );
  };

  const createFlexSection = () => {
    const rand = 2 + Math.random() * 8;

    const blogs = [];

    for (let i = 0; i < rand; i++)
      blogs.push(
        createBlogPost({
          image: "assets/images/bar.jpg",
          type: "filler",
          title: "404 title not found",
          author: "No one",
          dateString: "2022-09-24"
        })
      );

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
    createElement("div", { className: "spacer" })
  ];

  children.forEach(child => main.appendChild(child));
}
