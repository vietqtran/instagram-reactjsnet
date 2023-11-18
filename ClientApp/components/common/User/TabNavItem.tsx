import React from "react"

interface TabNavItemProps {
   children: React.ReactNode
}

export default function TabNavItem({ children }: TabNavItemProps) {
   return <div className='mx-8 py-5 cursor-pointer'>{children}</div>
}
