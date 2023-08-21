import '../styles/custom.css'
import React from 'react'
import Hello from "../components/Hello";
import { createRoot } from "react-dom/client";
import { fetchData } from '../api/api';

const section = document.createElement('section');
document.body.insertAdjacentElement('afterbegin', section);

createRoot(section).render(

    <Hello />
);
fetchData()
