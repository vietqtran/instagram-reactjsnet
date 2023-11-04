import ProtectedRoute from "./components/HOC/ProtectedRoute"
import HomePage from "./components/Home/HomePage"
import LoginForm from "./components/Login/LoginForm"
import OldUserLogin from "./components/Login/OldUserLogin"
import RegisterForm from "./components/Login/RegisterForm"

const AppRoutes = [
   {
      index: true,
      element: <OldUserLogin />,
   },
   {
      path: "/login",
      element: <LoginForm />,
   },
   {
      path: "/signup",
      element: <RegisterForm />,
   },
   {
      path: "/home",
      element: <ProtectedRoute path='/home' component={HomePage} />,
   },
]

export default AppRoutes
