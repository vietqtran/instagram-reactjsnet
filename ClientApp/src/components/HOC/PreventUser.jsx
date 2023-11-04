import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const PreventUser = ({ component: Component, ...rest }) => {
   const token = localStorage.getItem("token")
   const navigate = useNavigate()
   useEffect(() => {
      if (token) {
         navigate("/home")
      }
   }, [token, navigate])
   if (token) {
      return null
   }
   return <Component {...rest} />
}

export default PreventUser
