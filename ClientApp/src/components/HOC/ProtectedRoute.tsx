import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ProtectedRouteProps {
   // Component to protect
   children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const navigate = useNavigate()

   useEffect(() => {
      // Kiểm tra xem có người dùng trong localStorage hay không
      const user = localStorage.getItem("user")

      if (!user) {
         // Nếu không có người dùng, điều hướng đến trang đăng nhập
         navigate("/login")
      }
   }, [navigate])

   // Cho phép truy cập nếu có người dùng trong localStorage
   return <>{children}</>
}

export default ProtectedRoute
