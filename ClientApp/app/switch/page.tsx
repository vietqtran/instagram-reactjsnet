import React from "react"
import FormParent from "@pages/Login/FormParent"
import Avatar from "@components/common/Avatar"
import Link from "next/link"
import Layout from "@components/layouts/AuthLayout"

function OldUserLogin() {
   return (
      <>
         <div className='my-1 grid w-full place-content-center'>
            <Avatar size={100} src={"/assets/logo/user.png"} />
         </div>
         <div className='flex w-full justify-center p-4'>
            <Link
               className='block rounded-lg bg-blue-500 px-4 py-[6px] text-sm font-medium text-white hover:bg-blue-600'
               href={""}
            >
               Continue as @username
            </Link>
         </div>
         <div className='mt-1 w-full pb-6 text-center text-sm'>
            <span>Not @username? </span>
            <Link
               className='font-medium text-blue-500 hover:text-sky-900'
               href={"/login"}
            >
               Switch accounts
            </Link>
         </div>
      </>
   )
}

export default OldUserLogin
