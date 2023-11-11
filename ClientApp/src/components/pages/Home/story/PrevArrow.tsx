import React, { CSSProperties } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"

interface PrevArrowProps {
   className?: string
   style?: CSSProperties
   onClick?: () => void
}

const PrevArrow: React.FC<PrevArrowProps> = ({ className, style, onClick }) => {
   const newClass: string =
      className +
         "opacity-1 left-[10px] drop-shadow-lg top-[10px] z-[2] absolute text-xl p-3 text-white bg-transparent" ||
      ""
   return (
      <button className={newClass} style={style} onClick={onClick}>
         <span className='block rounded-full bg-white text-black text-opacity-10'>
            <MdKeyboardArrowLeft />
         </span>
      </button>
   )
}

export default PrevArrow
