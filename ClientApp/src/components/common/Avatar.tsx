import React from "react"

interface AvatarProps {
   size: number
   src: string
}

const Avatar: React.FC<AvatarProps> = ({ size, src }) => {
   return (
      <div
         style={{ width: size + "px" }}
         className='aspect-square overflow-hidden rounded-full'
      >
         <img src={src} alt='avatar' className='aspect-square h-full w-full' />
      </div>
   )
}

export default Avatar
