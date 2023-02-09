import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sites.css';
import avtoelectrika from '../../images/portfolio/avtoelectrika.jpg';
import bavlymuka from '../../images/portfolio/bavly-muka.jpg';
import frbtlt from '../../images/portfolio/frbtlt.jpg';
import gippokrat16 from '../../images/portfolio/gippokrat16.jpg';
import kafolat from '../../images/portfolio/kafolat.jpg';
import ngta from '../../images/portfolio/ngta.jpg';
import prodservis from '../../images/portfolio/prodservis.jpg';
import upakovka from '../../images/portfolio/upakovka.jpg';

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
                            <img src={avtoelectrika} alt="Автоэлектрика" />
                        </div>
                        <div>
                            <img src={bavlymuka} alt="Бавлы Мука" />
                        </div>
                        <div>
                            <img src={frbtlt} alt="Школа Карате" />
                        </div>
                        <div>
                            <img src={gippokrat16} alt="Гиппократ" />
                        </div>
                        <div>
                            <img src={kafolat} alt="Кафолат" />
                        </div>
                        <div>
                            <img src={ngta} alt="НГТА" />
                        </div>
                        <div>
                            <img src={prodservis} alt="НГТА" />
                        </div>
                        <div>
                            <img src={upakovka} alt="Упаковка" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Sites;