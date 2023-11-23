import React from "react"
import ReelOutline from "@components/Icons/Reel/ReelOutline"
import Video from "@components/common/Video"

const ExploreReelItem = () => {
   return (
      <div className='cursor-pointer w-full h-full relative aspect-[16/25]'>
         <div className='absolute p-3 right-0 top-0'>
            <ReelOutline />
         </div>
         <Video
            autoplay={false}
            controls={false}
            src='/assets/videos/export_1666804436109.mov'
            className='w-full h-full object-cover'
         />
      </div>
   )
}

export default ExploreReelItem
