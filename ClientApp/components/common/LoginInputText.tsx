import React, { useState } from "react"

interface LoginInputTextProps {
   text: string
   setText: (text: string) => void
   placeholder: string
}

function LoginInputText({ text, setText, placeholder }: LoginInputTextProps) {
   const [isFocus, setIsFocus] = useState(false)

   return (
      <div
         className={`${
            text && text !== "" ? "pb-[2px] pt-[14px]" : "py-2"
         } w-full bg-gray-50 px-2 text-sm relative rounded-[4px] overflow-hidden border-[1px] my-1 ${
            isFocus === true ? "border-gray-400" : "border-gray-300"
         }`}
      >
         <span
            className={`${
               text && text !== ""
                  ? "top-[1px] text-[9px]"
                  : "top-[50%] translate-y-[-50%] text-xs"
            } absolute left-0 px-2 text-gray-500 z-10 pointer-events-none duration-75 ease-linear`}
         >
            {placeholder}
         </span>
         <input
            onFocus={() => {
               setIsFocus(true)
            }}
            onBlur={() => {
               setIsFocus(false)
            }}
            value={text || ""}
            onChange={(e) => setText(e.target.value)}
            className='z-20 h-full min-w-full bg-transparent text-xs leading-none text-black outline-none'
         />
      </div>
   )
}

export default LoginInputText
