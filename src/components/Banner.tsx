import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { BannerType } from '../types/banner';

type ProductManagerProps = {
    banners: BannerType[];

}
const Banner = (props: ProductManagerProps) => {

    return (
        <>
            {/* <img src="https://suno.vn/blog/wp-content/uploads/2018/05/cach-chup-anh-san-pham-co-concept-758x400.jpg" alt="" width="100%" height="300" /> */}
            <div className="slide-container">
                <Slide>

                    {props.banners?.map((banner, index) => {
                        console.log(banner)
                        return (
                            <div key={index} className="border-bottom text-[20px]">
                                <div className="each-slide" key={index}>
                                    <div className="image-container">
                                        <img src={banner.img} width="100%" height="100%" />
                                    </div>

                                </div>
                            </div>

                        )
                    })}
                </Slide>
            </div >



        </>


    )
}

export default Banner





// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// type ProductManagerProps = {
//     banners: BannerType[];

// }
// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { BannerType } from "../types/banner";

// const Banner = (props: ProductManagerProps) => {
//     return (

//         <Swiper
//             cssMode={true}
//             navigation={true}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper"
//         >
//             {props.banners?.map((banner, index) => {
//                 console.log(banner)
//                 return (
//                     <div key={index}>

//                         <SwiperSlide><img src={banner.img} alt="" /></SwiperSlide>
//                     </div>
//                 )
//             })}


//         </Swiper>

//     )
// }
// export default Banner