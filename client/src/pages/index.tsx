// import "../styles/custom.css";
import "../styles/custom.scss"
import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";

const main = document.getElementById("app");
const root = createRoot(main);
root.render(<App/>);