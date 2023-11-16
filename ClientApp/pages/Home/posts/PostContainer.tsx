"use client"

import { UserResponse } from "@type/UserResponse"
import { fetchUsersData } from "@utils/fetchData/user"
import React, { useEffect, useState } from "react"

function PostContainer() {
   const [users, setUsers] = useState<UserResponse[]>([])

   useEffect(() => {
      fetchUsersData().then((response: any) => {
         setUsers(response)
      })
   }, [])
   return (
      <div className='w-full'>
         {users.map((u, i) => {
            return <span key={i}>{u.name}</span>
         })}
      </div>
   )
}

export default PostContainer
