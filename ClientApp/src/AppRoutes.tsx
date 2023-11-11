import HomePage from "./components/pages/Home/HomePage"
import LoginForm from "./components/pages/Login/LoginForm"
import OldUserLogin from "./components/pages/Login/OldUserLogin"
import RegisterForm from "./components/pages/Login/RegisterForm"
import React from "react"

const AppRoutes: { [key: string]: React.ReactNode }[] = [
   {
      index: true,
      element: <OldUserLogin />,
   },
   {
      path: "/login", // Add the 'path' property here
      element: <LoginForm />,
   },
   {
      path: "/signup", // Add the 'path' property here
      element: <RegisterForm />,
   },
   {
      path: "/home", // Add the 'path' property here
      element: <HomePage />,
   },
]

export default AppRoutes
