import Image from 'next/image'
import React from 'react'

interface AvatarWithStoryProps {
  size: number
  src: string
  hasStories: boolean
}

export default function AvatarWithStory({
  size,
  src,
  hasStories
}: Readonly<AvatarWithStoryProps>) {
  let storyBorderSize
  if (hasStories) {
    if (size > 50) {
      storyBorderSize = 'md:border-4'
    } else {
      storyBorderSize = 'border-[2px]'
    }
  } else {
    storyBorderSize = ''
  }
  const storyBorderClass = `${storyBorderSize} border-2 border-white`

  return (
    <div
      className={`rounded-full cursor-pointer ${
        size > 50 ? 'md:p-1 p-[2px]' : 'p-[2px]'
      } ${hasStories ? 'story-border' : ''}`}
    >
      <div
        style={{ width: size, height: size }}
        className={`aspect-square h-fit w-fit overflow-hidden rounded-full ${storyBorderClass}`}
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
