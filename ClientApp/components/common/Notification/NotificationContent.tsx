import Comment from './Comment'
import LikePost from './LikePost'
import LikeStory from './LikeStory'
import MentionComment from './MentionComment'
import NewFollow from '@components/common/Notification/NewFollow'
import React from 'react'

function NotificationContent() {
   return (
      <div className='w-full'>
         <div className='p-5 pb-0'>
            <h1 className='text-2xl font-bold'>Notifications</h1>
         </div>
         <div className='v-border-b px-5 pb-2'>
            <h2 className='py-3 font-bold'>Today</h2>
            <NewFollow
               sender={{
                  id: '',
                  email: '',
                  avatar: '/assets/logo/user.png',
                  name: '_username',
                  username: '_username',
                  dob: '2000-01-01'
               }}
            />
            <LikeStory
               sender={{
                  id: '',
                  email: '',
                  avatar: '/assets/logo/user.png',
                  name: '_username',
                  username: '_username',
                  dob: '2000-01-01'
               }}
            />
            <LikePost
               sender={{
                  id: '',
                  email: '',
                  avatar: '/assets/logo/user.png',
                  name: '_username',
                  username: '_username',
                  dob: '2000-01-01'
               }}
            />
            <MentionComment
               sender={{
                  id: '',
                  email: '',
                  avatar: '/assets/logo/user.png',
                  name: '_username',
                  username: '_username',
                  dob: '2000-01-01'
               }}
            />
            <Comment
               sender={{
                  id: '',
                  email: '',
                  avatar: '/assets/logo/user.png',
                  name: '_username',
                  username: '_username',
                  dob: '2000-01-01'
               }}
            />
         </div>
      </div>
   )
}

export default NotificationContent
