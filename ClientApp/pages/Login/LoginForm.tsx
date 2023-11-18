import React, { FormEvent, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import Link from "next/link"
import LoginButton from "@pages/Login/LoginButton"
import { LoginCredentials } from "@type/LoginCredentials"
import LoginInputPassword from "@components/common/LoginInputPassword"
import LoginInputText from "@components/common/LoginInputText"
import { LoginResponse } from "@type/LoginResponse"
import LoginWithFacebook from "@pages/Login/LoginWithFacebook"
import { User } from "@type/User"
import { login } from "@utils/api/userApi"
import { loginRedux } from "@redux/actions/user"
import { useDispatch } from "react-redux"

const LoginForm = () => {
   const dispatch = useDispatch()
   const router = useRouter()
   const searchParams = useSearchParams()

   const [account, setAccount] = useState<string>(
      searchParams && searchParams?.get("e") !== ""
         ? (searchParams.get("e") as string)
         : ""
   )
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
               if ((loginResponse as LoginResponse).status === "Succeed") {
                  console.log(loginResponse)
                  const user: User = {
                     id: loginResponse.user.id,
                     accessToken: loginResponse.accessToken,
                     avatar: loginResponse.user.avatar,
                     email: loginResponse.user.email,
                     name: loginResponse.user.name,
                     refreshToken: loginResponse.refreshToken,
                     username: loginResponse.user.username,
                  }
                  dispatch(loginRedux(user))
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
      <form
         onSubmit={handleSubmit}
         className='flex w-full flex-col items-center'
      >
         <div className='flex w-[270px] flex-col'>
            <LoginInputText
               text={account}
               setText={setAccount}
               placeholder={"Email"}
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
   )
}

export default LoginForm
