import HomeLayout from "@components/layouts/HomeLayout"
import Link from "next/link"
import React from "react"

const BadRequest404 = () => {
   return (
      <HomeLayout>
         <div className='w-full text-center'>
            <div className='py-8 text-2xl font-semibold'>{`Sorry, this page isn't available.`}</div>
            <p>
               The link you followed may be broken, or the page may have been
               removed.{" "}
               <Link href={"/"} className='text-blue-700 hover:text-blue-900'>
                  Go back to Instagram.
               </Link>
            </p>
         </div>
      </HomeLayout>
   )
}

export default BadRequest404
