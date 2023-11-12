import React from "react"
import { AiFillFacebook } from "react-icons/ai"

function LoginWithFacebook() {
   return (
      <button
         className={`flex w-full items-center justify-center rounded-lg bg-blue-400 py-[6px] text-sm font-medium text-white hover:bg-blue-500`}
      >
         <span className='mr-2 text-base'>
            <AiFillFacebook />
         </span>
         <span>Log in with Facebook</span>
      </button>
   )
}

export default LoginWithFacebook
