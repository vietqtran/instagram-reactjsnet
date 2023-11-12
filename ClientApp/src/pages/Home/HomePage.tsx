import React from "react"
import HomeLayout from "../../components/layouts/HomeLayout"
import StoryContainer from "./story/StoryContainer"
import PostContainer from "./posts/PostContainer"
import SuggestContainer from "./suggest/SuggestContainer"

function HomePage() {
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

export default HomePage
