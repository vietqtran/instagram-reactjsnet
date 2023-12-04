import instance from "./_axios_instance"

const END_POINT = {
    LIKE_COMMENT: 'LikeComment',
    LIKED_USERS: 'user',
    LIKE_COMMENT_QUANTITY: 'count'
}

export const getLikeCommentQuantity = (commentId: string) => {
    return instance.get(`/${END_POINT.LIKE_COMMENT}/${END_POINT.LIKE_COMMENT_QUANTITY}?commentId=${commentId}`)
}

export const getLikedCommentUsers = (commentId: string) => {
    return instance.get(`${END_POINT.LIKE_COMMENT}/${END_POINT.LIKED_USERS}?commentId=${commentId}`)
}

export const likeComment = (commentId: string, userId: string) => {
    return instance.post(`${END_POINT.LIKE_COMMENT}?commentId=${commentId}&userId=${userId}`)
}

export const unlikeComment = (commentId: string, userId: string) => {
    return instance.delete(`${END_POINT.LIKE_COMMENT}?commentId=${commentId}&userId=${userId}`)
}