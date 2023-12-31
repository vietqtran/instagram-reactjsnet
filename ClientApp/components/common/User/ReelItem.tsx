import React from "react"
import Video from "../Video"

export default function ReelItem() {
   return (
      <div className='cursor-pointer w-full h-full relative aspect-[16/25]'>
         <Video
            autoplay={false}
            controls={false}
            src='/assets/videos/export_1666804436109.mov'
            className='w-full h-full object-cover'
         />
      </div>
   )
}
