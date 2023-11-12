import React, { CSSProperties } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

interface NextArrowProps {
   className?: string
   style?: CSSProperties
   onClick?: () => void
}

const NextArrow: React.FC<NextArrowProps> = ({ className, style, onClick }) => {
   const newClass: string =
      className +
         "opacity-1 right-[10px] drop-shadow-lg top-[10px] z-[2] absolute text-xl p-3 text-white bg-transparent" ||
      ""
   return (
      <button className={newClass} style={style} onClick={onClick}>
         <span className='block rounded-full bg-white text-black text-opacity-10'>
            <MdKeyboardArrowRight />
         </span>
      </button>
   )
}

export default NextArrow
