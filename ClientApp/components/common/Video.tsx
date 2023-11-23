import React from "react"

type VideoProps = {
   src: string
   className: string
   autoplay: boolean
   controls: boolean
}

const Video = ({ src, className, autoplay, controls }: VideoProps) => {
   return (
      <video
         src={src}
         className={className}
         autoPlay={autoplay}
         controls={controls}
      />
   )
}

export default Video
