import Link from "next/link"
import React from "react"

interface CommentWrapperProps {
   children: string
}

const CommentWrapper = ({ children }: CommentWrapperProps) => {
   // Check a word is start with '@' or '#'
   const parseTextToLinks = (text: string) => {
      const regex = /(\s|^)([@#][\w]+)/g
      return text.split(regex).map((part, index) => {
         if (part.match(/^[@#]\w+$/)) {
            const url = part.startsWith("@")
               ? `/u/${part.slice(1)}`
               : `/explore/tag/${part.slice(1)}`
            return (
               <Link className='text-blue-800' key={index} href={url}>
                  {part}
               </Link>
            )
         } else {
            return part
         }
      })
   }

   return <p>{parseTextToLinks(children)}</p>
}

export default CommentWrapper
