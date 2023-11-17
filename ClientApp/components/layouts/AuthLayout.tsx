import React, { ReactNode } from "react"

import Footer from "../common/Footer"
import ReduxProvider from "@components/common/ReduxProvider"

interface AuthLayoutProps {
   children: ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
   return (
      <ReduxProvider>
         <div className='flex min-h-screen w-full flex-col items-center justify-between overflow-y-auto'>
            <div className='flex min-h-0 flex-1 items-center justify-center'>
               {children}
            </div>
            <Footer />
         </div>
      </ReduxProvider>
   )
}

export default AuthLayout
