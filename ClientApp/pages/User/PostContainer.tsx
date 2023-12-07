import React, { useContext, useEffect, useState } from "react"

import PostItem from "@components/common/User/PostItem"
import { PostResponse } from "@type/responseModel/postResponse"
import { getPostByUserId } from "@utils/api/postApi"
import UserContext from "@components/context/UserContext"

const PostContainer = () => {
   const [posts, setPosts] = useState<PostResponse[]>()
   const userContext = useContext(UserContext)
   useEffect(() => {
      const fetchPostsData = async () => {
         const data: PostResponse[] = await getPostByUserId(
            userContext?.id ?? ""
         ).then((res: any) => {
            return res
         })
         setPosts(data)
      }
      fetchPostsData()
   }, [userContext?.id])
   return (
      <div className='grid w-full grid-cols-3 gap-1'>
         {posts?.map((post) => {
            return <PostItem post={post} key={post.id} />
         })}
      </div>
   )
}

export default PostContainer
