// import "../styles/custom.css";
import "../styles/custom.scss";
import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";
import showProperties from "../services/showProperties";
import { fetchData } from "../api/api";

const { user } = await fetchData();
const main = document.getElementById("app");
const root = createRoot(main);
root.render(<App />);
showProperties(user)