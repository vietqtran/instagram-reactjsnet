"use client"

import React, { useState, FormEvent } from "react"
import LoginInputText from "@components/common/LoginInputText"
import LoginInputPassword from "@components/common/LoginInputPassword"
import LoginWithFacebook from "@pages/Login/LoginWithFacebook"
import Link from "next/link"
import LoginButton from "@pages/Login/LoginButton"
import AuthLayout from "@components/layouts/AuthLayout"
import FormParent from "@pages/Login/FormParent"
import { LoginCredentials } from "@type/LoginCredentials"
import { login } from "@utils/api/userApi"
import { LoginResponse } from "@type/LoginResponse"
import { useRouter } from "next/navigation"

function LoginForm() {
   const router = useRouter()

   const [account, setAccount] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const loginData: LoginCredentials = {
         email: account,
         password: password,
      }
      try {
         await login(loginData)
            .then((response: any) => {
               const loginResponse = response as LoginResponse
               console.log(`=======> RESPONSE: `, loginResponse)
               if (loginResponse.status === "Succeed") {
                  router.push("/")
                  return
               }
            })
            .catch((err: Error) => {
               console.log(`=======> ERROR: `, err)
            })
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <AuthLayout>
         <FormParent type='login'>
            <form
               onSubmit={handleSubmit}
               className='flex w-full flex-col items-center'
            >
               <div className='flex w-[270px] flex-col'>
                  <LoginInputText
                     text={account}
                     setText={setAccount}
                     placeholder={"Phone number, username, or email"}
                  />
                  <LoginInputPassword
                     text={password}
                     setText={setPassword}
                     placeholder={"Password"}
                  />
                  <LoginButton
                     canClick={account !== "" && password.length >= 6}
                     text={"Log in"}
                  />
                  <div className='my-3 flex w-full items-center justify-between opacity-80'>
                     <hr className='flex-1' />
                     <span className='px-4 text-xs font-medium text-gray-600'>
                        OR
                     </span>
                     <hr className='flex-1' />
                  </div>
                  <LoginWithFacebook />
                  <Link
                     className='py-4 text-center text-xs text-blue-900'
                     href='forgot'
                  >
                     Forgot password?
                  </Link>
               </div>
            </form>
         </FormParent>
      </AuthLayout>
   )
}

export default LoginForm
