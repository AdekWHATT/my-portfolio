import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sites.css';
const Sites = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='Sites'>
            <div className='container'>
                <h1 className='sites-title'>Мое Портфолио</h1>
                <div>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>1</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Sites