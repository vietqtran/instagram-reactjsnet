import React from "react"
import { Route, Routes } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import "./custom.css"

function App() {
   return (
      <Routes>
         {AppRoutes.map((route, index) => {
            const { element, ...rest } = route
            return <Route key={index} {...rest} element={element} />
         })}
      </Routes>
   )
}

export default App
