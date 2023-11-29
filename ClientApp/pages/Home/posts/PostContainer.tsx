"use client"

import React, { useEffect, useState } from "react"

import Post from "@components/common/Home/Post"
import { PostResponse } from "@type/responseModel/postResponse"
import { getAllPosts } from "@utils/api/postApi"

function PostContainer() {
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

   const updateAfterDeletePost = (postId: string) => {
      const newPost = posts?.filter((post) => post.id !== postId)
      setPosts(newPost)
   }

   return (
      <div className='mb-10 mt-3 flex w-full flex-col items-center'>
         {posts?.map((post) => {
            return (
               <Post
                  updateAfterDeletePost={updateAfterDeletePost}
                  key={post.id}
                  post={post}
                  type='user'
               />
            )
         })}
      </div>
   )
}

export default PostContainer
