import instance from "./_axios_instance"

const END_POINT = {
    LIKE_POST: 'LikePost',
    LIKED_USERS: 'users',
}

export const getLikedPostUsers = (postId: string) => {
    return instance.get(`${END_POINT.LIKE_POST}/${END_POINT.LIKED_USERS}?postId=${postId}`)
}

export const likePost = (postId: string, userId: string) => {
    return instance.post(`${END_POINT.LIKE_POST}?postId=${postId}&userId=${userId}`)
}

export const unlikePost = (postId: string, userId: string) => {
    return instance.delete(`${END_POINT.LIKE_POST}?postId=${postId}&userId=${userId}`)
}