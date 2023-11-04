import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./input.css"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
