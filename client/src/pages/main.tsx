import React from 'react'
import Hello from "../components/Hello";
const greetings = document.createElement('p')
greetings.innerHTML = 'hello webpack'
document.body.append(greetings)