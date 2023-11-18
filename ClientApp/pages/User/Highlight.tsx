import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import AddHighLight from "@components/common/User/AddHighLight"
import HighLightItem from "./HighLightItem"
import NextArrow from "@pages/Home/story/NextArrow"
import PrevArrow from "@pages/Home/story/PrevArrow"
import React from "react"
import Slider from "react-slick"

const settings = {
   dots: false,
   infinite: false,
   speed: 500,
   slidesToShow: 7,
   slidesToScroll: 3,
   prevArrow: <PrevArrow />,
   nextArrow: <NextArrow />,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 6,
         },
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 8,
         },
      },
      {
         breakpoint: 639,
         settings: {
            slidesToShow: 12,
         },
      },
   ],
}

export default function Highlight() {
   const slideToShow = 8

   return (
      <div className='max-w-full my-8'>
         <div className='w-full  overflow-hidden'>
            {slideToShow > 7 && (
               <Slider className='relative' {...settings}>
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
               </Slider>
            )}
            {slideToShow <= 7 && (
               <div className='flex w-full items-start'>
                  <HighLightItem />
                  <HighLightItem />
               </div>
            )}
         </div>
      </div>
   )
}
