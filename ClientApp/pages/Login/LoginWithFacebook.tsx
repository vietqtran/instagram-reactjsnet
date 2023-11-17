import { useDispatch, useSelector } from "react-redux"

import { AiFillFacebook } from "react-icons/ai"
import { FacebookSignUpUser } from "@type/FacebookSignUpUser"
import React from "react"
import { addFacebookUser } from "@redux/actions/facebookUserAction"
import { handleFacebookLogin } from "@utils/api/auth/facebook-login"
import { useRouter } from "next/navigation"

function LoginWithFacebook() {
   const dispatch = useDispatch()
   const router = useRouter()

   const handleLoginWithFacebook = () => {
      handleFacebookLogin().then((response) => {
         const facebookSignUpUser = response as FacebookSignUpUser
         if (
            facebookSignUpUser &&
            facebookSignUpUser.name !== "" &&
            facebookSignUpUser.email !== ""
         ) {
            dispatch(addFacebookUser(facebookSignUpUser))
            router.push("/a/facebook")
            return
         }
      })
   }

   return (
      <div
         onClick={handleLoginWithFacebook}
         className={`flex w-full items-center justify-center rounded-lg bg-blue-400 py-[6px] text-sm font-medium text-white hover:bg-blue-500`}
      >
         <span className='mr-2 text-base'>
            <AiFillFacebook />
         </span>
         <span>Log in with Facebook</span>
      </div>
   )
}

export default LoginWithFacebook
