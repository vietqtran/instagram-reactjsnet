import React, { useEffect, useState } from "react"

import PostItem from "@components/common/User/PostItem"
import { PostResponse } from "@type/responseModel/postResponse"
import { RootState } from "@redux/reducers"
import { User } from "@type/User"
import { getPostByUserId } from "@utils/api/postApi"
import { useSelector } from "react-redux"

const PostContainer = () => {
   const [posts, setPosts] = useState<PostResponse[]>()
   const user: User = useSelector((state: RootState) => state.user)
   useEffect(() => {
      const fetchPostsData = async () => {
         const data: PostResponse[] = await getPostByUserId(user.id).then(
            (res: any) => {
               return res
            }
         )
         setPosts(data)
      }
      fetchPostsData()
   }, [])
   return (
      <div className='w-full grid grid-cols-3 gap-1'>
         {posts?.map((post) => {
            return <PostItem post={post} key={post.id} />
         })}
      </div>
   )
}

export default PostContainer
