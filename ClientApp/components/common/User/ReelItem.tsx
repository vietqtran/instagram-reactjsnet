import React, { ReactNode } from "react"

export default function ReelItem() {
   return (
      <div className='cursor-pointer w-full relative aspect-[16/25]'>
         <video
            src='/assets/videos/export_1666804436109.mov'
            typeof='video/mp4'
         ></video>
      </div>
   )
}
