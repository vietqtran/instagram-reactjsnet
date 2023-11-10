import ProtectedRoute from "./components/HOC/ProtectedRoute"
import HomePage from "./components/Home/HomePage"
import LoginForm from "./components/Login/LoginForm"
import OldUserLogin from "./components/Login/OldUserLogin"
import RegisterForm from "./components/Login/RegisterForm"
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
