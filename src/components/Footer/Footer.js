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
                            <li><a href="#!">Email: vyacheslaw.kilin@mail.ru</a></li>
                            <li><a href="#!">Телефон: +7 (999) 169-93-90</a></li>
                            <li><a href="#!">WhatsApp</a></li>
                            <li><a href="#!">Telegram</a></li>
                            <li><a href="#!">GitHub</a></li>
                        </ul>
                    </div>
                    <div className='footer__bottom-block'>
                        <div className='navbar__logo'>
                            <Link to='/'><img src={logotext} alt="Логотип"/></Link>
                            <div>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer