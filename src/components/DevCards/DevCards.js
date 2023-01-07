import React from 'react';
import './DevCards.css';
import pans from '../../images/icons/pans.svg';
import uiUx from '../../images/icons/ui.svg';
import menu from '../../images/icons/menu.svg';
import logo from '../../images/icons/logo.svg';
import backend from '../../images/icons/backend.svg';
import frontend from '../../images/icons/frontend.svg';
const DevCards = () => {
    return (
        <div className='DevCards'>
            <div className='container'>
                <div className='dev-cards_container'>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={pans} alt="Индивидуальный подход" />
                        </div>
                        <span>Индивидуальный подход</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={uiUx} alt="Отзывчивая разработка" />
                        </div>
                        <span>Отзывчивая разработка</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={menu} alt="Адаптивность" />
                        </div>
                        <span>Адаптивность</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={logo} alt="Популярные CMS" />
                        </div>
                        <span>Популярные<br />CMS</span>
                    </div>

                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={backend} alt="Back-End" />
                        </div>
                        <span>Back-End</span>
                    </div>

                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <img src={frontend} alt="Front-End" />
                        </div>
                        <span>Front-End</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DevCards;