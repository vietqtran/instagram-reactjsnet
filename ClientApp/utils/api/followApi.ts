import instance from './_axios_instance'

const END_POINT = {
  FOLLOW: 'follow',
  START_FOLLOW: 'startFollow',
  UNFOLLOW: 'unfollow'
}

export const followApi = (sourceUserId: string, destinationUserId: string) => {
  return instance.post(
    `${END_POINT.FOLLOW}/${END_POINT.START_FOLLOW}?sourceUserId=${sourceUserId}&destinationUserId=${destinationUserId}`
  )
}

export const unfollowApi = (
  sourceUserId: string,
  destinationUserId: string
) => {
  return instance.delete(
    `${END_POINT.FOLLOW}/${END_POINT.UNFOLLOW}?sourceUserId=${sourceUserId}&destinationUserId=${destinationUserId}`
  )
}
