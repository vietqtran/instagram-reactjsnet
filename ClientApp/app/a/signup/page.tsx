"use client"

import React, { FormEvent, useState } from "react"

import AuthLayout from "@components/layouts/AuthLayout"
import FormParent from "@pages/Login/FormParent"
import Link from "next/link"
import LoginButton from "@pages/Login/LoginButton"
import LoginInputPassword from "@components/common/LoginInputPassword"
import LoginInputText from "@components/common/LoginInputText"
import LoginWithFacebook from "@pages/Login/LoginWithFacebook"
import { SignUpCredentials } from "@type/SignUpCredential"
import { SignUpResponse } from "@type/SignUpResponse"
import { isMailValid } from "@utils/validate/emailValidate"
import { register } from "@utils/api/userApi"
import { useRouter } from "next/navigation"

export default function SignUp() {
   const router = useRouter()

   const [email, setEmail] = useState<string>("")
   const [name, setName] = useState<string>("")
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
         avatar: "/assets/logo/user.png",
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
      <AuthLayout>
         <FormParent type='signup'>
            <form
               onSubmit={handleSubmit}
               className='flex w-full flex-col items-center'
            >
               <div className='flex w-[270px] flex-col pb-4'>
                  <div className='flex w-full items-center justify-center px-1 pb-4 pt-0 text-center text-base font-medium leading-4 opacity-75'>
                     Sign up to see photos and videos from your friends.
                  </div>
                  <LoginWithFacebook />
                  <div className='my-3 flex w-full items-center justify-between opacity-80'>
                     <hr className='flex-1' />
                     <span className='px-4 text-xs font-medium text-gray-600'>
                        OR
                     </span>
                     <hr className='flex-1' />
                  </div>
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
                     <p className='mb-2'>
                        People who use our service may have uploaded your email
                        information to Instagram.{" "}
                        <Link
                           className='text-blue-700'
                           href={
                              "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT0cOoBthIQGDn2z5MTsPZxiid0wFHCEXl6V7_e2TtLHWDyR-0aDB_PmYAocF5xLZoLeLyw24a_mTg-YqOrGwz4h1UyERwiSyNJ5-e7nxsX6QwkLuql7pVqM8XgjG3eDkRR9amn7jUkspSHsxSAsCg"
                           }
                        >
                           Learn More
                        </Link>
                     </p>
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
                        isMailValid(email) &&
                        username !== "" &&
                        password.length >= 6
                     }
                     text={"Sign up"}
                  />
               </div>
            </form>
         </FormParent>
      </AuthLayout>
   )
}

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
