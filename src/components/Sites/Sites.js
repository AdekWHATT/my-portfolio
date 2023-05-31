import React from 'react';
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
    return (
        <div className='Sites'>
            <div className='container'>
                <h1 className='sites-title'>Несколько коммерческих проектов</h1>
                <div className='site-grid'>
                    <div className='site-grid-item'>
                        <img src={avtoelectrika} alt='АвтоЭлектрика' />
                        <a href='#!'>Автоэлектрика</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={bavlymuka} alt='Бавлы Мука' />
                        <a href='https://bavly-muka.ru' target="_blank">Бавлы Мука</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={frbtlt} alt='Школа Карате' />
                        <a href='https://recordtlt.ru/' target="_blank">Школа Карате</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={gippokrat16} alt='Медицинский центр Гиппократ' />
                        <a href='http://gippokrat16.ru' target="_blank">Медицинский центр Гиппократ</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={kafolat} alt='Кафолат Центр' />
                        <a href='https://kafolat-center.ru' target="_blank">Кафолат Центр</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={ngta} alt='НГТА' />
                        <a href='http://ngta.pro' target="_blank">НГТА</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={prodservis} alt='ПродСервис' />
                        <a href='https://prodservis-s.ru' target="_blank">ПродСервис</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={upakovka} alt='Упаковка32' />
                        <a href='https://упаковка32.рф' target="_blank">Упаковка32</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sites;