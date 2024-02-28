import { PostRequest } from '@type/requestModels/PostRequest'
import instance from './_axios_instance'

const END_POINT = {
   POST: 'post',
   GET_POST_BY_USER_ID: 'user'
}

export const addPost = (post: PostRequest) => {
   return instance.post(`/${END_POINT.POST}`, post)
}

export const getAllPosts = () => {
   return instance.get(`${END_POINT.POST}`)
}

export const getPostByUserId = (userId: string) => {
   return instance.get(
      `${END_POINT.POST}/${END_POINT.GET_POST_BY_USER_ID}?userId=${userId}`
   )
}

export const getPostById = (postId: string) => {
   return instance.get(`${END_POINT.POST}/${postId}`)
}

export const deletePost = (postId: string) => {
   return instance.delete(`${END_POINT.POST}/${postId}`)
}
