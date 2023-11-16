"use client"

import PostContainer from "@pages/Home/posts/PostContainer"
import StoryContainer from "@pages/Home/story/StoryContainer"
import SuggestContainer from "@pages/Home/suggest/SuggestContainer"
import HomeLayout from "@components/layouts/HomeLayout"

export default function Home() {
   return (
      <HomeLayout>
         <div className='container mx-auto mt-3 grid w-full max-w-[630px] grid-cols-5 md:mt-10 lg:max-w-[1050px]'>
            <div className='col-span-5 overflow-x-hidden lg:col-span-3'>
               <StoryContainer />
               <PostContainer />
            </div>
            <div className='col-span-2 hidden lg:block'>
               <SuggestContainer />
            </div>
         </div>
      </HomeLayout>
   )
}
