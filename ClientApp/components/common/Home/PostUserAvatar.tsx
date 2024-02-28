import Image from 'next/image'
import React from 'react'

interface PostUserAvatarProps {
  size: number
  src: string
  hasStories: boolean
}

export default function PostUserAvatar({
  size,
  src,
  hasStories
}: Readonly<PostUserAvatarProps>) {
  return (
    <div
      className={`rounded-full bg-black p-[2px] ${
        hasStories ? 'story-border' : ''
      }`}
    >
      <div
        style={{ width: size, height: size }}
        className={`${
          hasStories ? 'border-2 border-white' : ''
        } aspect-square h-fit w-fit overflow-hidden rounded-full`}
      >
        <Image
          src={src}
          alt="avatar"
          className="aspect-square h-full w-full object-cover"
          width={size}
          height={size}
          priority
        />
      </div>
    </div>
  )
}
