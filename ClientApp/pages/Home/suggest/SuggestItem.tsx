import Avatar from '@components/common/User/Avatar'
import { RootState } from '@redux/reducers'
import { UserVM } from '@type/view/UserVM'
import { followApi, unfollowApi } from '@utils/api/followApi'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  user: UserVM
}

function SuggestItem({ user }: Props) {
  const currentUser = useSelector((state: RootState) => state.user)
  const [isFollowed, setIsFollowed] = useState(false)

  const follow = async () => {
    try {
      await followApi(currentUser.id, user.id).then((res) => {
        if (res) setIsFollowed(true)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const unfollow = async () => {
    try {
      await unfollowApi(currentUser.id, user.id).then((res) => {
        if (res) setIsFollowed(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mb-3 flex items-center">
      <Link href={`/u/${user?.username}`} className="block">
        <Avatar src={user?.avatar ?? '/assets/logo/user.png'} size={44} />
      </Link>
      <Link
        href={`/u/${user?.username}`}
        className="flex flex-1 flex-col items-start pl-3"
      >
        <span className="text-[13px] font-semibold">
          {user?.username ?? ''}
        </span>
        <span className="text-[13px] text-gray-500">{user?.name ?? ''}</span>
      </Link>
      <div>
        {!isFollowed && (
          <button
            onClick={follow}
            className="text-xs font-semibold text-blue-500 hover:text-blue-600"
          >
            Follow
          </button>
        )}
        {isFollowed && (
          <button
            onClick={unfollow}
            className="text-xs font-semibold text-black/80 hover:text-gray-400"
          >
            Following
          </button>
        )}
      </div>
    </div>
  )
}

export default SuggestItem
