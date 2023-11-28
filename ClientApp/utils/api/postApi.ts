import { PostRequest } from "@type/requestModels/PostRequest"
import instance from "./_axios_instance"

const END_POINT = {
    POST: 'post',
}

export const addPost = (post: PostRequest) => {
    return instance.post(`/${END_POINT.POST}`, post)
}