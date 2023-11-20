import React from "react"

interface TabNavItemProps {
   children: React.ReactNode
   tab: string
   currentTab: string
}

export default function TabNavItem({
   children,
   tab,
   currentTab,
}: TabNavItemProps) {
   return (
      <div
         className={`${
            currentTab === tab
               ? "text-black before:contents-[] before:absolute before:w-full before:h-[1px] before:bg-black before:top-0 before:left-0"
               : "text-gray-400"
         } mx-8  cursor-pointer text-[13px] font-medium relative`}
      >
         {children}
      </div>
   )
}
