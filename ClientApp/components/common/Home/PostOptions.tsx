import React from "react"

type PostOptionsProps = {
   setShowOptions: (value: boolean) => void
}

const PostOptions = ({ setShowOptions }: PostOptionsProps) => {
   return (
      <div className='w-[400px] bg-white rounded-lg modal-keyframe'>
         <ul className='text-sm'>
            <li className='cursor-pointer py-[14px] w-full text-center v-border-b text-red-600 font-bold'>
               Report
            </li>
            <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
               Go to post
            </li>
            <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
               Share to...
            </li>
            <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
               Copy link
            </li>
            <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
               Embed
            </li>
            <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
               About this account
            </li>
            <li
               onClick={() => {
                  setShowOptions(false)
               }}
               className='cursor-pointer w-full py-[14px] text-center'
            >
               Cancel
            </li>
         </ul>
      </div>
   )
}

export default PostOptions
