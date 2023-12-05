import React, { useEffect, useState } from "react"

import { AiOutlineClose } from "react-icons/ai"
import LikedUserItem from "./LikedUserItem"
import { UserVM } from "@type/UserVM"
import { getLikedCommentUsers } from "@utils/api/likeCommentApi"
import { getLikedPostUsers } from "@utils/api/likePostApi"

type LikedUserModalProps = {
   id: string
   type: string
   setShowLikedUser: (show: boolean) => void
}

const LikedUserModal = ({
   id,
   type,
   setShowLikedUser,
}: LikedUserModalProps) => {
   const [likedUsers, setLikedUsers] = useState<UserVM[]>([])

   useEffect(() => {
      const fetchData = async () => {
         if (type === "comment") {
            const data: UserVM[] = await getLikedCommentUsers(id).then(
               (res: any) => {
                  return res
               }
            )
            if (data) {
               setLikedUsers(data)
            }
         }
         if (type === "post") {
            const data: UserVM[] = await getLikedPostUsers(id).then(
               (res: any) => {
                  return res
               }
            )
            if (data) {
               setLikedUsers(data)
            }
         }
      }
      fetchData()
   }, [id, type])

   return (
      <div className='modal-keyframe h-[356px] w-full min-w-[400px] overflow-hidden rounded-lg bg-white pb-10'>
         <div className='v-border-b relative py-2 text-center font-semibold'>
            <span>Liked</span>
            <div
               onClick={() => {
                  setShowLikedUser(false)
               }}
               className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer p-3'
            >
               <AiOutlineClose />
            </div>
         </div>
         <div className='h-full overflow-y-auto'>
            {likedUsers.map((user) => {
               return <LikedUserItem user={user} key={user.id} />
            })}
         </div>
      </div>
   )
}

export default LikedUserModal
