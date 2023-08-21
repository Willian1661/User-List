import '../styles/custom.css'
import React from 'react'
import App from "./app";
import { createRoot } from "react-dom/client";
import { fetchData } from '../api/api';
const main = document.getElementById('app')
const root = createRoot(main)
root.render(<App/>)
fetchData()