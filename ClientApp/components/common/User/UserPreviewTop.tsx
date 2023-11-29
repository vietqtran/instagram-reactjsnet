import Avatar from "./Avatar"
import AvatarWithStory from "./AvatarWithStory"
import EditProfileButton from "../Button/EditProfileButton"
import Highlight from "@pages/User/Highlight"
import React from "react"
import SettingButton from "../Button/SettingButton"
import ViewArchiveButton from "../Button/ViewArchiveButton"
import { User } from "@type/User"
import { useSelector } from "react-redux"
import { RootState } from "@redux/reducers"

const UserPreviewTop = () => {
   const user: User = useSelector((state: RootState) => state.user)

   return (
      <div className='w-full max-w-[935px] px-2 md:px-0 md:pb-10'>
         <div className='flex w-full items-center justify-start'>
            <div className='mr-4 hidden px-12 md:block'>
               <AvatarWithStory
                  hasStories={true}
                  size={150}
                  src={user.avatar ?? "/assets/logo/user.png"}
               />
            </div>

            <div className='mr-4 block px-2 md:hidden'>
               <AvatarWithStory
                  hasStories={true}
                  size={77}
                  src='/assets/logo/user.png'
               />
            </div>

            <div className='p-2'>
               <div className='mb-5 flex flex-1 flex-wrap items-center'>
                  <span className='order-1 text-[19px] font-semibold'>
                     vietqtran
                  </span>
                  <div className='order-3 mt-3 flex w-full flex-nowrap md:order-2 md:mt-0 md:w-fit'>
                     <EditProfileButton />
                     <ViewArchiveButton />
                  </div>
                  <div className='order-2 mx-2 md:order-3'>
                     <SettingButton />
                  </div>
               </div>

               <div className='md:block'>
                  <div className='flex items-center'>
                     <div className='mr-8'>
                        <span className='text-[15px]'>
                           <span className='font-semibold'>18</span> posts
                        </span>
                     </div>
                     <div className='mr-8'>
                        <span className='text-[15px]'>
                           <span className='font-semibold'>18</span> followers
                        </span>
                     </div>
                     <div className='mr-8'>
                        <span className='text-[15px]'>
                           <span className='font-semibold'>18</span> following
                        </span>
                     </div>
                  </div>
               </div>

               <div className='mt-5 hidden md:block'>
                  <div className='text-sm font-semibold'>Quốc Việt</div>
                  <p className='text-sm'>bio</p>
               </div>
            </div>
         </div>

         <div className='mt-3 block md:hidden'>
            <div className='text-sm font-semibold'>Quốc Việt</div>
            <p className='text-sm'>bio</p>
         </div>

         <Highlight />
      </div>
   )
}

export default UserPreviewTop
