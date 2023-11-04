import React from "react"
import NavBar from "../common/NavBar/NavBar"
import Footer from "../common/Footer"

function HomeLayout({ children }) {
   return (
      <div className='flex min-h-[200vh]'>
         <NavBar />
         <main className='ml-0 flex h-auto flex-1 items-center justify-center sm:ml-[72px] md:ml-[335px]'>
            {children}
            <Footer />
         </main>
      </div>
   )
}

export default HomeLayout
