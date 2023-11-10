import React from "react"

interface SubNavContentProps {
   children: React.ReactNode
}

function SubNavContent({ children }: SubNavContentProps) {
   return (
      <div className=''>
         <div className='z-[-10]'>{children}</div>
      </div>
   )
}

export default SubNavContent
