import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
type Props = {}
const Banner = (props: Props) => {
    const slideImages = [
        {
            url: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg',

        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH1-1nvrzTpDiTKqAqexbvP-e4BoWo66MeDI5-TTVChReoy_ItuGmpDxLNIpaKX0_UV4&usqp=CAU',

        },
        {
            url: 'https://logoaz.net/wp-content/uploads/2019/02/quy-tac-chup-anh-san-pham-phong-nen.jpg',

        },
    ];
    return (
        <>
            {/* <img src="https://suno.vn/blog/wp-content/uploads/2018/05/cach-chup-anh-san-pham-co-concept-758x400.jpg" alt="" width="100%" height="300" /> */}
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} >
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>



        </>


    )
}

export default Banner


