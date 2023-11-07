import React from "react"

interface TextLogoProps {
   size: number
}

function TextLogo({ size }: TextLogoProps) {
   return (
      <div className='flex w-full items-center justify-center'>
         <img
            width={`${size}px`}
            height='auto'
            src={"/assets/logo/Instagram_logo.png"}
            alt='logo'
         />
      </div>
   )
}

export default TextLogo
