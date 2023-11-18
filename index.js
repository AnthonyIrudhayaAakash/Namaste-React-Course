import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{id:"heading_hello"},"Hello guys from React and React-DOM;git");

const container = ReactDOM.createRoot(document.getElementById("container"));
const alt_heading = React.createElement("p",{id:"para"}, "I'm Anthony Aakash")

container.render(alt_heading);
