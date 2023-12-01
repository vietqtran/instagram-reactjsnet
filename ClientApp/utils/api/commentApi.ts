import { CommentRequest } from "@type/requestModels/commentRequest"
import instance from "./_axios_instance"

const END_POINT = {
    COMMENT: 'comment',
}

export const getPostComments = (postId: string) => {
    return instance.get(`${END_POINT.COMMENT}/${postId}`)
}

export const addComment = (commentRequest: CommentRequest) => {
    return instance.post(`${END_POINT.COMMENT}`, commentRequest)
}