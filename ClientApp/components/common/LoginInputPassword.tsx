import React, { useState } from "react"

interface LoginInputPasswordProps {
   text: string
   setText: (text: string) => void
   placeholder: string
}

function LoginInputPassword({
   text,
   setText,
   placeholder,
}: LoginInputPasswordProps) {
   const [isFocus, setIsFocus] = useState(false)
   const [show, setShow] = useState(false)

   return (
      <div
         className={`${
            text !== "" ? "pb-[2px] pt-[14px]" : "py-2"
         } w-full bg-gray-50 px-2 text-sm relative rounded-[4px] overflow-hidden border-[1px] my-1 flex items-center justify-between ${
            isFocus === true ? "border-gray-400" : "border-gray-300"
         }`}
      >
         <span
            className={`${
               text !== ""
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
            type={show === true ? "text" : "password"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='z-20 h-[20px] w-full bg-transparent pr-11 text-xs leading-none text-black outline-none'
         />
         {text !== "" && (
            <span
               onClick={() => setShow(!show)}
               className='absolute right-[6px] top-[50%] z-30 block translate-y-[-50%] cursor-pointer text-sm font-medium'
            >
               {show === true ? "Hide" : "Show"}
            </span>
         )}
      </div>
   )
}

export default LoginInputPassword
