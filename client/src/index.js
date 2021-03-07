import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

document.querySelector("title").textContent =
  "دروس أكاديمي | أكبر منصة تعليمية";
document.querySelector("html").setAttribute("lang", "ar");
document.querySelector("html").setAttribute("dir", "rtl");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
