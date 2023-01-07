import { React, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './AboutMe.css';
import aboutMeOne from '../../images/about/aboutme1.png';
import aboutMeTwo from '../../images/about/aboutme2.png';
import aboutMeThree from '../../images/about/aboutme3.png';
const AboutMe = () => {
    const location = useLocation();
    const abouMeRef = useRef(null);
    useEffect(() => {
        const blockId = location.hash.substring(1);
        const blockElement = document.getElementById(blockId);
        if (blockElement) {
            blockElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.hash]);
    return (
        <div ref={abouMeRef} id="about_me" className='AboutMe'>
            <div className='container'>
                <div className='about-me__left-circle'></div>
                <div className='about-me__right-top'></div>
                <div className='about-me__right-bottom'></div>

                <div className='about-me__container__title'>ОБО МНЕ
                </div>
                <div className='about-me__photo-left-top'>
                    <img src={aboutMeOne} alt="Мое фото" />
                </div>
                <div className='about-me__photo-left-bottom'>
                    <img src={aboutMeTwo} alt="Мое фото" />
                </div>
                <div className='about-me__center-card'>
                    Еще раз всем привет! Итак, вы уже знаете, что меня зовут Слава. Немного о себе: 30 лет, работаю в процессиональной Веб-Студии. Почему программирование? Все элементарно - мне это нравится, профессия будущего, благодаря которой я могу обеспечить себя и осуществить свою мечту - путешествовать, на данный момент я специализируюсь на веб-дизайне, front-end и back-end разработке, сайтах под ключ. Почему вы должны выбрать меня? Я подхожу к каждому заказу с большой ответственностью и любовью, так как хочу сделать себе имя, исключить плагиат и халатность, полностью изучить проект, клиента и его целевую аудиторию, работать на качество, стараясь сделать заказ максимально быстро и уникально, учитывая все правки и желания.
                    Доверившись мне, вы получите максимальную отдачу от своего проекта, сэкономите свои нервы и время.
                    Если я вас заинтересовал, вы хотите узнать что-то еще или воспользоваться моими услугами, то я предоставлю все свои контакты ниже.
                </div>
                <div className='about-me__photo-right'>
                    <img src={aboutMeThree} alt="Мое фото" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;