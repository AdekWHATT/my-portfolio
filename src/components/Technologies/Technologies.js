import React from 'react';
import './Technologies.css';
import html from '../../images/techno/html1.svg';
import css from '../../images/techno/css1.svg';
import bs from '../../images/techno/bs1.svg';
import js from '../../images/techno/js1.svg';
import wp from '../../images/techno/wp2.svg';
import ps from '../../images/techno/ps1.svg';
import sass from '../../images/techno/sass1.svg';
import figma from '../../images/techno/fg1.svg';
import bitrix from '../../images/techno/bitrix.png';
import react from '../../images/techno/react.svg';
import php from '../../images/techno/php.svg';
const Technologies = () => {
    return (
        <div className='Technologies'>
            <div className='container'>
                <h1 className='technologies-title'>Мои инструменты</h1>
                <div className='techno-container'>
                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={html} alt="HTML5" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={css} alt="CSS3" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={bs} alt="Bootstrap5" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={js} alt="JavaScript" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={php} alt="PHP" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={react} alt="React" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={figma} alt="Figma" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={wp} alt="WordPress" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={ps} alt="PhotoShop" />
                        </div>
                    </div>
                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={sass} alt="SASS" />
                        </div>
                    </div>

                    <div className='techno-item'>
                        <div className='techno-item__img-container'>
                            <img src={bitrix} alt="Bitrix" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;