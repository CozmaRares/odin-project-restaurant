import "../styles/booking.css";
import { createElement } from "../utils/create-element";

export default function loadBookingPage() {
  const createContacts = () => {
    const contacts = [
      {
        svg: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
        h1: "Phone",
        p: "+1 (234) 567 89 00"
      },
      {
        svg: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
        h1: "Email",
        p: "beerboutique@fake.email.com"
      },
      {
        svg: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",
        h1: "Working Hours",
        p: "Open from 4PM to 2AM"
      }
    ];

    return createElement(
      "section",
      {
        className: "contacts section-center"
      },
      [
        createElement(
          "ul",
          {},
          contacts.map(({ svg, h1, p }) =>
            createElement("li", {
              className: "contact",
              innerHTML: `
              <div>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="${svg}"
                  />
                </svg>
              </div>
              <div>
                <h1>${h1}</h1>
                <p>${p}</p>
              </div>
              `
            })
          )
        )
      ]
    );
  };

  const createForm = () => {
    const inputs = [
      {
        label: "Name",
        inputProps: {
          id: "main-name",
          name: "main-name",
          type: "text",
          placeholder: "Name",
          required: ""
        }
      },
      {
        label: "Phone number",
        inputProps: {
          id: "main-number",
          name: "main-number",
          type: "text",
          placeholder: "Phone number",
          required: ""
        }
      },
      {
        label: "Number of guests",
        inputProps: {
          id: "main-guests",
          name: "main-guests",
          type: "number",
          placeholder: "Number of guests",
          required: ""
        }
      },
      {
        label: "Choose a date",
        inputProps: {
          id: "main-date",
          name: "main-date",
          type: "date",
          required: ""
        }
      }
    ];

    return createElement(
      "section",
      {
        className: "form section-center"
      },
      [
        createElement("img", {
          src: "assets/images/location.png",
          alt: "location"
        }),
        createElement("form", {}, [
          ...inputs.map(({ label, inputProps }) =>
            createElement("div", {}, [
              createElement("label", {
                htmlFor: inputProps.id,
                innerText: label
              }),
              createElement("input", inputProps)
            ])
          ),
          createElement("button", {
            type: "submit",
            className: "btn",
            innerText: "Reserve a table"
          })
        ])
      ]
    );
  };

  const main = document.querySelector("main");

  const children = [
    createElement("h1", {
      innerText: "BOOK A TABLE"
    }),
    createElement("div", { className: "spacer" }),
    createContacts(),
    createElement("div", { className: "spacer" }),
    createForm(),
    createElement("div", { className: "spacer" })
  ];

  children.forEach(child => main.appendChild(child));
}
