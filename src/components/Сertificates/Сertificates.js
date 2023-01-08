import { React, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import './Certificates.css';
import content from '../../images/certificates/content-m.png';
import admin from '../../images/certificates/admin.png';
import webmimo from '../../images/certificates/webmimo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Certificates = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const location = useLocation();
    const myBlockRef = useRef(null);

    useEffect(() => {
        const blockId = location.hash.substring(1);
        const blockElement = document.getElementById(blockId);
        if (blockElement) {
            blockElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.hash]);
    return (
        <div ref={myBlockRef} id="certificates" className='Certificates'>
            <div className='container'>
                <div className='cert-title'>
                    <h1>сертификаты</h1>
                </div>
                <Slider {...settings}>
                    <div className='certificates__item'>
                        <img src={content} alt="Сертификат Битрикс"
                        />
                    </div>
                    <div className='certificates__item'>
                        <img src={webmimo} alt="Сертификат Мимо" />
                    </div>
                    <div className='certificates__item'>
                        <img src={admin} alt="Сертификат Битрикс" />
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Certificates;
