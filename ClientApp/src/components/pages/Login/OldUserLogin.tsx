import React from "react"
import FormParent from "./FormParent"
import Avatar from "../../common/Avatar"
import { Link } from "react-router-dom"
import Layout from "../../layouts/Layout"

function OldUserLogin() {
   return (
      <Layout>
         <FormParent type={""}>
            <div className='my-1 grid w-full place-content-center'>
               <Avatar size={100} src={"/assets/logo/user.png"} />
            </div>
            <div className='flex w-full justify-center p-4'>
               <Link
                  className='block rounded-lg bg-blue-500 px-4 py-[6px] text-sm font-medium text-white hover:bg-blue-600'
                  to={""}
               >
                  Continue as @username
               </Link>
            </div>
            <div className='mt-1 w-full pb-6 text-center text-sm'>
               <span>Not @username? </span>
               <Link
                  className='font-medium text-blue-500 hover:text-sky-900'
                  to={"/login"}
               >
                  Switch accounts
               </Link>
            </div>
         </FormParent>
      </Layout>
   )
}

export default OldUserLogin
