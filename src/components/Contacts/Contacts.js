import React from 'react';
import './Contacts.css';
import contacts from '../../images/contacts.png';
const Contacts = () => {
    return (
        <div className='Contacts'>
            <div className='container'>
                <div className='contacts-title'>
                    <h1>Мои Контакты</h1>
                </div>
                <div className='contacts-container'>
                    <div className='contacts_left-block'>
                        <div className='contacts_left-block__title'>
                            <span>Вы можете связаться со мной любым удобным для Вас способом 24/7</span>
                            <table class="contacts-table">
                                <tbody>
                                    <tr>
                                        <td>Телефон</td>
                                        <td><a href='tel:+79991699390'>+7 (999) 169-93-90</a></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><a href='mailto:vyacheslaw.kilin@mail.ru'>vyacheslaw.kilin@mail.ru</a></td>
                                    </tr>
                                    <tr>
                                        <td>WhatsApp</td>
                                        <td><a href='tel:+79991699390'>+7 (999) 169-93-90</a></td>
                                    </tr>
                                    <tr>
                                        <td>Telegram</td>
                                        <td><a href='tel:+79991699390'>@adekwhatt</a></td>
                                    </tr>
                                    <tr>
                                        <td>Мой GitHub</td>
                                        <td><a href='https://github.com/AdekWHATT'>https://github.com/AdekWHATT</a></td>
                                    </tr>
                                    <tr>
                                        <td>портфолио</td>
                                        <td><a href='#!'>Портфолио HH.ru</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='contacts_right-block'>
                        <div className='contacts_right-block-img'>
                            <img src={contacts} alt='Контакты'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;