import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./index.css";
import App from "./components/App/App";
require("./stylesheets/main.scss");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
