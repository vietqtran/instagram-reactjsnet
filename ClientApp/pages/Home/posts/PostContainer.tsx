"use client"

import React, { useEffect, useState } from "react"

import { LoginResponse } from "@type/LoginResponse"
import Post from "@components/common/Home/Post"
import { RootState } from "@redux/reducers"
import { useSelector } from "react-redux"

function PostContainer() {
   const user: LoginResponse = useSelector((state: RootState) => state.user)

   useEffect(() => {
      // fetchUsersData().then((response: any) => {
      //    setUsers(response||[])
      // })
   }, [])
   return (
      <div className='w-full mt-3 flex flex-col items-center mb-10'>
         <Post type='user' />
         <Post type='tag' />
      </div>
   )
}

export default PostContainer
