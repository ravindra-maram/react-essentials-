// Manipulate the HTML DOM using Javscript

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
