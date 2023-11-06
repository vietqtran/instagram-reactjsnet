import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react"

interface PreventUserProps {
   component: React.ComponentType<any>
}

const PreventUser: React.FC<PreventUserProps> = ({
   component: Component,
   ...rest
}) => {
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
