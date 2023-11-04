import React from "react"

function LoginButton({ text, canClick }) {
   return (
      <button
         type={canClick === true ? "submit" : "button"}
         className={`mt-3 block w-full rounded-lg ${
            canClick === true
               ? "bg-blue-500 cursor-pointer hover:bg-blue-600"
               : "bg-blue-400 hover:bg-blue-400 "
         } py-[6px] text-sm font-medium text-white`}
      >
         {text}
      </button>
   )
}

export default LoginButton
