import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ProtectedRoute = ({ component: Component, ...rest }) => {
   // Check exist User
   const token = localStorage.getItem("token")
   const navigate = useNavigate()

   useEffect(() => {
      if (!token) {
         // Use navigate to programmatically redirect to the login page
         navigate("/login")
      }
   }, [token, navigate])

   return token ? <Component {...rest} /> : null
}

export default ProtectedRoute
