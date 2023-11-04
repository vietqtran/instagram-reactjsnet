import React from "react"
import { Img, useImage } from "react-image"

function TextLogo({ size }) {
   return (
      <div className='flex w-full items-center justify-center'>
         <Img
            width={size + "px"}
            height='auto'
            src={"/assets/logo/Instagram_logo.png"}
            alt='logo'
         />
      </div>
   )
}

export default TextLogo
