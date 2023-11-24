import Comment from "./Comment"
import LikePost from "./LikePost"
import LikeStory from "./LikeStory"
import MentionComment from "./MentionComment"
import NewFollow from "@components/common/Notification/NewFollow"
import React from "react"

function NotificationContent() {
   return (
      <div className='w-full'>
         <div className='p-5 pb-0'>
            <h1 className='font-bold text-2xl'>Notifications</h1>
         </div>
         <div className='px-5 v-border-b pb-2'>
            <h2 className='py-3 font-bold'>Today</h2>
            <NewFollow
               sender={{
                  id: "",
                  email: "",
                  avatar: "/assets/logo/user.png",
                  name: "_username",
                  username: "_username",
               }}
            />
            <LikeStory
               sender={{
                  id: "",
                  email: "",
                  avatar: "/assets/logo/user.png",
                  name: "_username",
                  username: "_username",
               }}
            />
            <LikePost
               sender={{
                  id: "",
                  email: "",
                  avatar: "/assets/logo/user.png",
                  name: "_username",
                  username: "_username",
               }}
            />
            <MentionComment
               sender={{
                  id: "",
                  email: "",
                  avatar: "/assets/logo/user.png",
                  name: "_username",
                  username: "_username",
               }}
            />
            <Comment
               sender={{
                  id: "",
                  email: "",
                  avatar: "/assets/logo/user.png",
                  name: "_username",
                  username: "_username",
               }}
            />
         </div>
      </div>
   )
}

export default NotificationContent
