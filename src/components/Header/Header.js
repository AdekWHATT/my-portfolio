import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css';
import logotext from '../../images/logo-text.svg';
import whatsapp from '../../images/icons/wa.svg';
import telegram from '../../images/icons/tg.svg';

import home from '../../images/mobile/home.png';
import about from '../../images/mobile/about.png';
import certificates from '../../images/mobile/certificates.png';
import portfolio from '../../images/mobile/portfolio.png';
import contacts from '../../images/mobile/contacts.png';
const Header = () => {
    const location = useLocation();
    return (
        <div className='Header'>
            <div className='container'>
                <div className='navbar-row'>
                    <div className='navbar__logo'>
                        <Link to='/'><img src={logotext} alt="Адекват" /></Link>
                    </div>
                    <div className='navbar__links'>
                        <ul className='navbar__list'>
                            <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Главная</Link></li>
                            <li><Link to="/#about_me">Обо мне</Link></li>
                            <li><Link to="/#certificates">Сертификаты</Link></li>
                            <li className={location.pathname === '/portfolio' ? 'active' : ''}><Link to="/portfolio">Портфолио</Link></li>
                            <li className={`navbar__list-contacts ${location.pathname === '/contacts' ? 'active' : ''}`}><Link to="/contacts">Контакты</Link>
                                <ul className='navbar__list_sub-social'>
                                    <li><a href='https://wa.me/79991699390' target="_blank" rel="noreferrer"><img src={whatsapp} alt="WhatsApp" /></a></li>
                                    <li><a href='https://t.me/adekwhatt' target="_blank" rel="noreferrer"><img src={telegram} alt="Telegram" /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='mobile-navbar'>
                        <ul className='mobile-navbar__list'>
                            <li><Link to="/"><img src={home} alt="Главная" /></Link></li>
                            <li><Link to="/#about_me"><img src={about} alt="Обо мне" /></Link></li>
                            <li><Link to="/#certificates"><img src={certificates} alt="Сертификаты" /></Link></li>
                            <li><Link to="/portfolio"><img src={portfolio} alt="Портфолио" /></Link></li>
                            <li><Link to="/contacts"><img src={contacts} alt="Контакты" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;