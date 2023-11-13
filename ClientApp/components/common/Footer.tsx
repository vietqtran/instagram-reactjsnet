import React from "react"
import Link from "next/link"
import { SlArrowDown } from "react-icons/sl"

function Footer() {
   return (
      <div className='mb-14 flex flex-col items-center text-xs text-gray-500'>
         <div className='flex w-full flex-wrap items-center justify-center'>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://about.meta.com/'
            >
               Meta
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://about.instagram.com/'
            >
               About
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://about.instagram.com/blog/'
            >
               Blog
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.instagram.com/about/jobs/'
            >
               Jobs
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://help.instagram.com/'
            >
               Help
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://developers.facebook.com/docs/instagram'
            >
               API
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.instagram.com/legal/privacy/'
            >
               Privacy
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.instagram.com/legal/terms/'
            >
               Terms
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.instagram.com/explore/locations/'
            >
               Locations
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.instagram.com/web/lite/'
            >
               Instagram Lite
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://www.threads.net/'
            >
               Threads
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT2jrDOnKi2YhDZKpG9NJ_gLeNNiN72Tqjhvx4DCIB5-6_wy-Mgz9XDPrrU9GjtAIPoy11jCl2dSYKDOUZNtHYalh2P11wGAPWPSr6pND9suA17tSHZNshhF-9Z5WFbMBNHXi4eULc3TotBaAJ75EA'
            >
               Contact Uploading & Non-Users
            </Link>
            <Link
               className='mx-1 px-1 hover:text-gray-500 hover:underline'
               href='https://about.meta.com/technologies/meta-verified/'
            >
               Meta Verified
            </Link>
         </div>
         <div className='mt-4 flex'>
            <div className='mr-3 flex items-center justify-center'>
               <div className='mr-1 block'>English</div>
               <div className='ml-1 block'>
                  <SlArrowDown />
               </div>
            </div>
            <div className='ml-3'>
               © 2023 Instagram from{" "}
               <Link
                  href={"https://github.com/vietqtran"}
                  className='hover:text-gray-500 hover:underline'
               >
                  vietqtran
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Footer
