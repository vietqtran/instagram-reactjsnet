"use client"

import React, { useEffect, useState } from "react"

import BadRequest404 from "@components/Error/BadRequest404"
import HomeLayout from "@components/layouts/HomeLayout"
import PostDetailContainer from "@pages/PostDetail/PostDetailContainer"
import { PostResponse } from "@type/responseModel/postResponse"
import { getPostById } from "@utils/api/postApi"
import { usePathname } from "next/navigation"

const PostDetailPage = () => {
   const pathname = usePathname()
   const postId = pathname?.split("/").at(-1) ?? ""
   const [post, setPost] = useState<PostResponse | undefined>()

   useEffect(() => {
      const fetchPostsData = async () => {
         const data: PostResponse = await getPostById(postId)?.then(
            (res: any) => {
               return res
            }
         )
         setPost(data)
         console.log(data)
      }
      fetchPostsData()
   }, [postId])
   if (post === undefined) {
      return <BadRequest404 />
   }
   return (
      <HomeLayout>
         <PostDetailContainer post={post} />
      </HomeLayout>
   )
}

export default PostDetailPage
