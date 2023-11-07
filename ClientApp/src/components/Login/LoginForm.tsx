import React, { useState, FormEvent } from "react"
import Layout from "../layouts/Layout"
import FormParent from "./FormParent"
import LoginInputText from "../common/LoginInputText"
import LoginInputPassword from "../common/LoginInputPassword"
import LoginWithFacebook from "./LoginWithFacebook"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"

function LoginForm() {
   const [account, setAccount] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(account, password)
   }

   return (
      <Layout>
         <FormParent type={"login"}>
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
                     to='forgot'
                  >
                     Forgot password?
                  </Link>
               </div>
            </form>
         </FormParent>
      </Layout>
   )
}

export default LoginForm
