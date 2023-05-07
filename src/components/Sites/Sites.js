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
                <h1 className='sites-title'>1Несколько коммерческих проектов</h1>
                <div className='site-grid'>
                    <div className='site-grid-item'>
                        <img src={avtoelectrika} alt='АвтоЭлектрика' />
                        <a href='#!'>Автоэлектрика</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={bavlymuka} alt='Бавлы Мука' />
                        <a href='#!'>Бавлы Мука</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={frbtlt} alt='Школа Карате' />
                        <a href='#!'>Школа Карате</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={gippokrat16} alt='Медицинский центр Гиппократ' />
                        <a href='#!'>Медицинский центр Гиппократ</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={kafolat} alt='Кафолат Центр' />
                        <a href='#!'>Кафолат Центр</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={ngta} alt='НГТА' />
                        <a href='#!'>НГТА</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={prodservis} alt='ПродСервис' />
                        <a href='#!'>ПродСервис</a>
                    </div>
                    <div className='site-grid-item'>
                        <img src={upakovka} alt='Упаковка32' />
                        <a href='#!'>Упаковка32</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sites;