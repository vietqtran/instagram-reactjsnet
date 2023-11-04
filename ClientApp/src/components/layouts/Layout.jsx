import React from "react"
import Footer from "../common/Footer"

function Layout({ children }) {
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
