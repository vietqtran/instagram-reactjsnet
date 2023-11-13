import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

interface ProtectedRouteProps {
   // Component to protect
   children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const navigate = useRouter()

   useEffect(() => {
      // Kiểm tra xem có người dùng trong localStorage hay không
      const user = localStorage.getItem("user")

      if (!user) {
         // Nếu không có người dùng, điều hướng đến trang đăng nhập
         navigate.push("/login")
         return
      }
   }, [navigate])

   // Cho phép truy cập nếu có người dùng trong localStorage
   return <>{children}</>
}

export default ProtectedRoute
