"use client"

import React, { useState, FormEvent } from "react"
import FormParent from "@pages/Login/FormParent"
import LoginButton from "@pages/Login/LoginButton"
import LoginWithFacebook from "@pages/Login/LoginWithFacebook"
import Link from "next/link"
import Layout from "@components/layouts/AuthLayout"
import LoginInputPassword from "@components/common/LoginInputPassword"
import LoginInputText from "@components/common/LoginInputText"

export default function Home() {
   const [contact, setContact] = useState<string>("")
   const [name, setName] = useState<string>("")
   const [username, setUsername] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(contact, name, username, password)
   }

   const isPhoneValid = () => {
      const regex = /^[0-9]{10}$/
      return regex.test(contact)
   }

   const isMailValid = () => {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      return regex.test(contact)
   }

   const validate = () => {
      return (
         (isMailValid() || isPhoneValid()) &&
         username !== "" &&
         password.length >= 6
      )
   }
   return (
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
               text={contact}
               setText={setContact}
               placeholder={"Phone number, username, or email"}
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
                  People who use our service may have uploaded your contact
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
            <LoginButton canClick={validate()} text={"Sign up"} />
         </div>
      </form>
   )
}
