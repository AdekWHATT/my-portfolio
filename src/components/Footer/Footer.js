import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import logotext from '../../images/logo-text.svg';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='footer__top-block'>
                        <ul className='navbar__list footer__center-block__list'>
                            <li><a href="mailto:vyacheslaw.kilin@mail.ru">vyacheslaw.kilin@mail.ru</a></li>
                            <li><a href="tel:+79991699390">+7 (999) 169-93-90</a></li>
                            <li><a href="https://wa.me/79991699390" target="_blank">WhatsApp</a></li>
                            <li><a href="https://t.me/adekwhatt" target="_blank">Telegram</a></li>
                            <li><a href="https://github.com/AdekWHATT" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer