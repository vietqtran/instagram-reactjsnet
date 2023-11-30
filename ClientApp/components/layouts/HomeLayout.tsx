import React, { ReactNode } from "react"

import Footer from "../common/Footer"
import NavBar from "../common/NavBar"
import ReduxProvider from "@components/common/ReduxProvider"

interface HomeLayoutProps {
   children: ReactNode
}

function HomeLayout({ children }: Readonly<HomeLayoutProps>) {
   return (
      <ReduxProvider>
         <div className='relative flex'>
            <NavBar />
            <main className='ml-0 flex h-auto min-h-[100vh] flex-1 flex-col items-center justify-start md:ml-[72px] lg:ml-[335px]'>
               <div className='flex-1'>{children}</div>
               <Footer />
            </main>
         </div>
      </ReduxProvider>
   )
}

export default HomeLayout
