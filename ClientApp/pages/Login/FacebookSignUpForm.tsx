import React, { FormEvent, useState } from "react"

import Avatar from "@components/common/User/Avatar"
import { FacebookSignUpUser } from "@type/requestModels/FacebookSignUpUser"
import Link from "next/link"
import LoginButton from "@pages/Login/LoginButton"
import LoginInputPassword from "@components/common/LoginInputPassword"
import LoginInputText from "@components/common/LoginInputText"
import { RootState } from "@redux/reducers"
import { SignUpCredentials } from "@type/requestModels/SignUpCredential"
import { SignUpResponse } from "@type/requestModels/SignUpResponse"
import { isMailValid } from "@utils/validate/emailValidate"
import { register } from "@utils/api/userApi"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

const FacebookSignUpForm = () => {
   const router = useRouter()
   const user: FacebookSignUpUser = useSelector(
      (state: RootState) => state.facebookSignUpUser
   )

   const [email, setEmail] = useState<string>(user.email)
   const [name, setName] = useState<string>(user.name)
   const [username, setUsername] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(email, name, username, password)
      const signUpData: SignUpCredentials = {
         email: email,
         name: name,
         password: password,
         username: username,
         avatar: "",
      }
      await register(signUpData)
         .then((response: any) => {
            const signUpResponse = response as SignUpResponse
            console.log("=====> SIGN UP RESPONSE", signUpResponse)
            if (signUpResponse.status === "Succeed") {
               router.push(`/a/login?e=${email}`)
               return
            }
         })
         .catch((err: Error) => {
            console.log("=====> SIGN UP ERROR: ", err)
         })
   }

   return (
      <form
         onSubmit={handleSubmit}
         className='flex w-full flex-col items-center'
      >
         <Avatar size={100} src={user.avatar} />
         <div className='flex w-[270px] flex-col pb-4'>
            <LoginInputText
               text={email}
               setText={setEmail}
               placeholder={"Email"}
            />
            <LoginInputText
               text={name}
               setText={setName}
               placeholder={"Full name"}
            />
            <LoginInputText
               text={username}
               setText={setUsername}
               placeholder={"Username"}
            />
            <LoginInputPassword
               text={password}
               setText={setPassword}
               placeholder={"Password"}
            />
            <div className='w-full py-2 text-center text-xs'>
               <p className='mt-2'>
                  By signing up, you agree to our{" "}
                  <Link
                     href={
                        "https://help.instagram.com/581066165581870/?locale=en_US"
                     }
                     className='text-blue-700'
                  >
                     Terms
                  </Link>{" "}
                  ,
                  <Link
                     href={
                        "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fpolicy&e=AT0cOoBthIQGDn2z5MTsPZxiid0wFHCEXl6V7_e2TtLHWDyR-0aDB_PmYAocF5xLZoLeLyw24a_mTg-YqOrGwz4h1UyERwiSyNJ5-e7nxsX6QwkLuql7pVqM8XgjG3eDkRR9amn7jUkspSHsxSAsCg"
                     }
                     className='text-blue-700'
                  >
                     Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                     href={"https://www.instagram.com/legal/cookies/"}
                     className='text-blue-700'
                  >
                     Cookies Policy
                  </Link>{" "}
                  .
               </p>
            </div>
            <LoginButton
               canClick={
                  isMailValid(email) && username !== "" && password.length >= 6
               }
               text={"Sign up"}
            />
         </div>
      </form>
   )
}

export default FacebookSignUpForm
