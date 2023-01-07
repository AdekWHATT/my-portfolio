import React from 'react';
import './MainInfo.css';
import mylogo from '../../images/my-2.png';
const MainInfo = () => {
  return (
    <div className='MainInfo'>
      <div className='container'>
        <div className='main-info__container'>
          <div className='main-info__description'>
            <div className='main-info__description-hello'>
              <h1><span className='unselectable'>&lt;head&gt;</span>Привет<span className='unselectable'>&lt;/head&gt;</span></h1>
            </div>
            <div className='main-info__description-name'>
              <h1>
                Меня зовут<br />
                Слава
              </h1>
            </div>
            <div className='main-info__description-text'>
              <span>
                Я занимаюсь front-end и back-end разработкой уже более двух лет.
                Вам нужен интернет-магазин, верстка сайта на популярных CMS или, может быть, сайт "под ключ"?<br />
                <span>Тогда свяжитесь со мной</span>
              </span>
            </div>
            <div className='main-info__description-button'>
              <button className='main-info__description-button__btn' type='button'>
                Связаться
              </button>
            </div>
          </div>
          <div className='main-info__img'>
            <img className='main-info__img-one' src={mylogo} alt="Мое Фото" />
            <div className='main-info__img-two'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo;