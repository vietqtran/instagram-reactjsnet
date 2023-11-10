import React, { ReactNode } from "react"
import Footer from "../common/Footer"
import NavBar from "../common/NavBar"

interface HomeLayoutProps {
   children: ReactNode
}

function HomeLayout({ children }: HomeLayoutProps) {
   return (
      <div className='relative flex min-h-[200vh]'>
         <NavBar />
         <main className='ml-0 flex h-auto flex-1 items-center justify-center sm:ml-[72px] md:ml-[335px]'>
            {children}
            <Footer />
         </main>
      </div>
   )
}

export default HomeLayout
