import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

interface PreventUserProps {
   component: React.ComponentType<any>
}

const PreventUser: React.FC<PreventUserProps> = ({
   component: Component,
   ...rest
}) => {
   const token = localStorage.getItem("token")
   const navigate = useRouter()

   useEffect(() => {
      if (token) {
         navigate.push("/home")
         return
      }
   }, [token, navigate])

   if (token) {
      return null
   }

   return <Component {...rest} />
}

export default PreventUser
