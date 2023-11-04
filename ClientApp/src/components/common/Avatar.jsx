import React from "react"
import { Img } from "react-image"

function Avatar({ size, src }) {
   return (
      <div
         style={{ width: size + "px" }}
         className='aspect-square overflow-hidden rounded-full'
      >
         <Img src={src} alt='avatar' className='aspect-square h-full w-full' />
      </div>
   )
}

export default Avatar
