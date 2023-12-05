import React, { useState } from "react"

interface PostContentProps {
   content: string
}

const PostContent = ({ content }: PostContentProps) => {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='w-full'>
         {content !== "" && (
            <>
               <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className={`${
                     readMore ? "h-auto" : "h-[20px]"
                  } overflow-hidden`}
               ></div>
               {!readMore && (
                  <div
                     onKeyDown={() => {}}
                     onClick={() => setReadMore(true)}
                     className='cursor-pointer leading-4'
                  >
                     <span>...</span>
                     <br />
                     <span className='text-gray-500'>more</span>
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default PostContent
