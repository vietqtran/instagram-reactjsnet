import React, { ReactNode } from "react"
import Footer from "../common/Footer"

interface LayoutProps {
   children: ReactNode
}

function Layout({ children }: LayoutProps) {
   return (
      <div className='flex min-h-screen w-full flex-col items-center justify-between overflow-y-auto'>
         <div className='flex min-h-0 flex-1 items-center justify-center'>
            {children}
         </div>
         <Footer />
      </div>
   )
}

export default Layout