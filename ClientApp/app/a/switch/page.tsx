import AuthLayout from "@components/layouts/AuthLayout"
import Avatar from "@components/common/Avatar"
import FormParent from "@pages/Login/FormParent"
import Link from "next/link"
import React from "react"

export default function SwitchAccount() {
   return (
      <AuthLayout>
         <FormParent type=''>
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
                  href={"/a/login"}
               >
                  Switch accounts
               </Link>
            </div>
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
