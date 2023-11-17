import Image from "next/image"
import React from "react"

interface AvatarProps {
   size: number
   src: string
}

const Avatar: React.FC<AvatarProps> = ({ size, src }) => {
   return (
      <div
         style={{ width: size, height: size }}
         className='aspect-square h-fit w-fit overflow-hidden rounded-full'
      >
         <Image
            src={src}
            alt='avatar'
            className='aspect-square h-full w-full'
            width={size}
            height={size}
            priority
         />
      </div>
   )
}

export default Avatar
