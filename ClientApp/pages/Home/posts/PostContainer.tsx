"use client"

import React, { useEffect, useState } from "react"

import { LoginResponse } from "@type/LoginResponse"
import { RootState } from "@redux/reducers"
import { UserResponse } from "@type/UserResponse"
import { fetchUsersData } from "@utils/fetchData/user"
import { useSelector } from "react-redux"

function PostContainer() {
   const user: LoginResponse = useSelector((state: RootState) => state.user)

   useEffect(() => {
      // fetchUsersData().then((response: any) => {
      //    setUsers(response||[])
      // })
   }, [])
   return <div className='w-full'>{user.user?.email}</div>
}

export default PostContainer
