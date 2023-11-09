import React, { ReactNode } from "react"
import TextLogo from "../common/TextLogo"
import { Link } from "react-router-dom"
import GetTheApp from "./GetTheApp"

interface FormParentProps {
   children: ReactNode
   type: "login" | "signup" | "" // Add valid types for "type"
}

function FormParent({ children, type }: FormParentProps) {
   return (
      <>
         <div className='flex flex-col items-center'>
            <div className='border-form-login light my-2 flex min-w-[348px] max-w-[348px] flex-col items-start justify-center py-2'>
               <div className='mb-3 mt-9 flex w-full items-center justify-center'>
                  <TextLogo size={175} />
               </div>
               {children}
            </div>
            {type !== "" && (
               <>
                  <div className='border-form-login light my-2 flex min-w-[348px] max-w-[348px] flex-col items-center justify-center py-4'>
                     {type === "login" ? (
                        <div className='text-sm'>
                           <span>{`Don't have an account?`}</span>
                           <Link
                              to={"/signup"}
                              className='ml-1 font-medium text-blue-500 hover:text-blue-500'
                           >
                              Sign up
                           </Link>
                        </div>
                     ) : (
                        <div className='text-sm'>
                           <span>{`Have an account?`}</span>
                           <Link
                              to={"/"}
                              className='ml-1 font-medium text-blue-500 hover:text-blue-500'
                           >
                              Log in
                           </Link>
                        </div>
                     )}
                  </div>
                  <GetTheApp />
               </>
            )}
         </div>
      </>
   )
}

export default FormParent
