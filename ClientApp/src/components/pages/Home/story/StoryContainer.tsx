import React from "react"
import StoryItem from "./StoryItem"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PrevArrow from "./PrevArrow"
import NextArrow from "./NextArrow"

function StoryContainer() {
   const slideToShow = 10
   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 3,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
   }
   return (
      <div className='w-full'>
         <div className='w-[630px] overflow-hidden'>
            {slideToShow > 8 && (
               <Slider {...settings}>
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
               </Slider>
            )}
            {slideToShow <= 8 && (
               <div className='flex w-full items-start'>
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
                  <StoryItem />
               </div>
            )}
         </div>
      </div>
   )
}

export default StoryContainer
