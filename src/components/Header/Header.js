import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css';
import logotext from '../../images/logo-text.svg';
import whatsapp from '../../images/icons/wa.svg';
import telegram from '../../images/icons/tg.svg';
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
                                    <li><a href='#!'><img src={whatsapp} alt="WhatsApp" /></a></li>
                                    <li><a href='#!'><img src={telegram} alt="Telegram" /></a></li>
                                </ul>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;