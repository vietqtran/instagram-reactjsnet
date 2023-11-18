import React, { ReactNode } from "react"

import Footer from "../common/Footer"
import NavBar from "../common/NavBar"
import ReduxProvider from "@components/common/ReduxProvider"

interface HomeLayoutProps {
   children: ReactNode
}

function HomeLayout({ children }: HomeLayoutProps) {
   return (
      <ReduxProvider>
         <div className='relative flex'>
            <NavBar />
            <main className='ml-0 flex h-auto flex-1 flex-col justify-start md:ml-[72px] lg:ml-[335px]'>
               {children}
               <Footer />
            </main>
         </div>
      </ReduxProvider>
   )
}

export default HomeLayout
