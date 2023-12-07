import React, { useEffect, useState } from "react"
import { getLikedPostUsers, likePost, unlikePost } from "@utils/api/likePostApi"

import CommentOutline from "@components/Icons/Comment/CommentOutline"
import HeartOutline from "@components/Icons/Heart/HeartOutline"
import HeartSolidLiked from "@components/Icons/Heart/HeartSolidLiked"
import LikedUserModal from "./LikedUserModal"
import Link from "next/link"
import Overlay from "./Overlay"
import { RootState } from "@redux/reducers"
import SaveOutlineBig from "@components/Icons/Save/SaveOutlineBig"
import ShareOutline from "@components/Icons/Share/ShareOutline"
import { User } from "@type/models/User"
import { UserVM } from "@type/view/UserVM"
import { useSelector } from "react-redux"

type LikedPostProps = {
   postId: string
}

const LikedPost = ({ postId }: LikedPostProps) => {
   const user: User = useSelector((state: RootState) => state.user)
   const [likedUsers, setLikedUsers] = useState<UserVM[]>([])
   const [liked, setLiked] = useState(false)
   const [showLikedUser, setShowLikedUser] = useState(false)

   useEffect(() => {
      const fetchUsers = async () => {
         const data: UserVM[] = await getLikedPostUsers(postId).then(
            (res: any) => {
               return res
            }
         )
         console.log(data)
         if (data) {
            setLikedUsers(data)
         }
      }
      fetchUsers()
   }, [postId])

   useEffect(() => {
      if (likedUsers.length > 0) {
         setLiked(likedUsers.map((l) => l.id).includes(user.id))
      }
   }, [likedUsers, user.id])

   const like = async () => {
      const data = await likePost(postId, user.id).then((res: any) => {
         return res
      })
      if (data === true) {
         setLiked(true)
         setLikedUsers((prev) => [
            ...prev,
            {
               avatar: user.avatar,
               dob: "",
               email: user.email,
               id: user.id,
               name: user.name,
               username: user.username,
            },
         ])
      }
   }

   const unlike = async () => {
      const data = await unlikePost(postId, user.id).then((res: any) => {
         return res
      })
      if (data === true) {
         setLiked(false)
         setLikedUsers(likedUsers.filter((l) => l.id !== user.id))
      }
   }
   return (
      <>
         {showLikedUser && (
            <Overlay setShow={setShowLikedUser} show={showLikedUser}>
               <LikedUserModal
                  setShowLikedUser={setShowLikedUser}
                  id={postId}
                  type='post'
               />
            </Overlay>
         )}
         <div>
            <div className='flex w-full items-center justify-between'>
               <div className='flex flex-1 items-center justify-start'>
                  {!liked && (
                     <div
                        onClick={like}
                        className='cursor-pointer p-2 hover:opacity-50'
                     >
                        <HeartOutline />
                     </div>
                  )}
                  {liked && (
                     <div
                        onClick={unlike}
                        className='cursor-pointer p-2 heart-keyframe'
                     >
                        <HeartSolidLiked />
                     </div>
                  )}
                  <div className='cursor-pointer p-2 hover:opacity-50'>
                     <CommentOutline />
                  </div>
                  <div className='cursor-pointer p-2 hover:opacity-50'>
                     <ShareOutline />
                  </div>
               </div>
               <div className='cursor-pointer p-2 hover:opacity-50'>
                  <SaveOutlineBig />
               </div>
            </div>
            {likedUsers && likedUsers.length > 0 && (
               <div className='px-2 text-sm'>
                  Liked by{" "}
                  <Link
                     className='font-semibold'
                     href={`/u/${likedUsers[0].username}`}
                  >
                     {likedUsers[0].username}
                  </Link>{" "}
                  {likedUsers.length > 1 && (
                     <span>
                        and{" "}
                        <span
                           onClick={() => {
                              setShowLikedUser(true)
                           }}
                           className='font-semibold cursor-pointer'
                        >
                           others
                        </span>
                     </span>
                  )}
               </div>
            )}
         </div>
      </>
   )
}

export default LikedPost
