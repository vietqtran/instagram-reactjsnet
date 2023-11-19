import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import AddHighLight from "@components/common/User/AddHighLight"
import HighLightItem from "./HighLightItem"
import NextArrow from "@pages/Home/story/NextArrow"
import PrevArrow from "@pages/Home/story/PrevArrow"
import React from "react"
import Slider from "react-slick"

export default function Highlight() {
   const slideToShow = 8

   return (
      <div className='w-full my-8'>
         <div className='flex overflow-x-auto overflow-y-hidden hide-scrollbar'>
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <HighLightItem />
            <AddHighLight />
         </div>
      </div>
   )
}
