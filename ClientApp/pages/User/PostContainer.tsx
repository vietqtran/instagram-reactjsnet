import React, { useContext, useEffect, useState } from 'react'

import PostItem from '@components/common/User/PostItem'
import { PostResponse } from '@type/responseModel/postResponse'
import { getPostByUsername } from '@utils/api/postApi'
import { useParams } from 'next/navigation'

const PostContainer = () => {
  const [posts, setPosts] = useState<PostResponse[]>()
  const params = useParams()
  useEffect(() => {
    const fetchPostsData = async () => {
      const data: PostResponse[] = await getPostByUsername(
        (params?.username as string) ?? ''
      ).then((res: any) => {
        return res
      })
      setPosts(data)
    }
    fetchPostsData()
  }, [params])
  return (
    <div className="grid w-full grid-cols-3 gap-1">
      {posts?.map((post) => {
        return <PostItem post={post} key={post.id} />
      })}
    </div>
  )
}

export default PostContainer
