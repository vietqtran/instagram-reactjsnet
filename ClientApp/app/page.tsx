'use client'

import HomeLayout from '@components/layouts/HomeLayout'
import PostContainer from '@pages/Home/posts/PostContainer'
import StoryContainer from '@pages/Home/story/StoryContainer'
import SuggestContainer from '@pages/Home/suggest/SuggestContainer'

export default function Home() {
   return (
      <HomeLayout>
         <div className='container mx-auto mt-3 grid w-full max-w-[630px] grid-cols-5 md:mt-10 lg:max-w-[1050px]'>
            <div className='col-span-5 overflow-x-hidden lg:col-span-3'>
               <StoryContainer />
               <PostContainer />
            </div>
            <div className='col-span-2 hidden lg:block'>
               <SuggestContainer />
            </div>
         </div>
      </HomeLayout>
   )
}

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
