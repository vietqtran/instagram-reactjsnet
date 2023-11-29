"use client"

import React, { useEffect, useState } from "react"

import { LoginResponse } from "@type/LoginResponse"
import Post from "@components/common/Home/Post"
import { RootState } from "@redux/reducers"
import { useSelector } from "react-redux"
import { PostResponse } from "@type/responseModel/postResponse"
import { getAllPosts } from "@utils/api/postApi"

function PostContainer() {
   const user: LoginResponse = useSelector((state: RootState) => state.user)
   const [posts, setPosts] = useState<PostResponse[]>()

   useEffect(() => {
      const fetchPostsData = async () => {
         const data: PostResponse[] = await getAllPosts().then((res: any) => {
            return res
         })
         setPosts(data)
      }
      fetchPostsData()
   }, [])
   return (
      <div className='mb-10 mt-3 flex w-full flex-col items-center'>
         {posts?.map((post) => {
            return <Post key={post.id} post={post} type='user' />
         })}
      </div>
   )
}

export default PostContainer
