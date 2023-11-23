import ExplorePostItem from "./ExplorePostItem"
import ExploreReelItem from "./ExploreReelItem"
import HomeLayout from "@components/layouts/HomeLayout"
import React from "react"
import ReelItem from "@components/common/User/ReelItem"

const ExploreContainer = () => {
   return (
      <HomeLayout>
         <div className='grid gap-1 py-5 max-w-[630px] lg:max-w-[963px]  container mx-auto'>
            <div className='gap-1 grid-cols-3 grid-rows-1 text-white grid w-full '>
               <div className='grid gap-1 grid-cols-2 grid-rows-2 col-span-2'>
                  <ExplorePostItem />
                  <ExplorePostItem />
                  <ExplorePostItem />
                  <ExplorePostItem />
               </div>
               <div className='col-span-1 h-full'>
                  <ExploreReelItem />
               </div>
            </div>
            <div className='gap-1 grid-cols-3 grid-rows-1 text-white container mx-auto grid w-full max-w-[630px] lg:max-w-[1050px]'>
               <div className='col-span-1 h-full'>
                  <ExploreReelItem />
               </div>
               <div className='grid gap-1 grid-cols-2 grid-rows-2 col-span-2'>
                  <ExplorePostItem />
                  <ExplorePostItem />
                  <ExplorePostItem />
                  <ExplorePostItem />
               </div>
            </div>
         </div>
      </HomeLayout>
   )
}

export default ExploreContainer
