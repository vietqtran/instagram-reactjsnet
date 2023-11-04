import React, { useEffect, useState } from "react"
import HomeLayout from "../layouts/HomeLayout"
import { getTodosAPI } from "../../api/todoApi"

function HomePage() {
   const [todos, setTodos] = useState([])

   useEffect(() => {
      fetchData()
   }, [])

   const fetchData = async () => {
      setTodos(await getTodosAPI())
   }

   console.log(todos)
   return <HomeLayout></HomeLayout>
}

export default HomePage
