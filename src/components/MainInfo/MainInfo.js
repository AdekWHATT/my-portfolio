import React, { useState, useEffect } from 'react';
import './MainInfo.css';
import mylogo from '../../images/my-2.png';

const MainInfo = () => {
  // Объявляем переменную состояния под названием «showModal» со ​​значением по умолчанию false.
  const [showModal, setShowModal] = useState(false);

  // Объявляем переменную состояния с именем «showFade» со значением по умолчанию false.
  const [showFade, setShowFade] = useState(false);

  // Объявляем функцию для переключения значения «showModal» между истинным и ложным
  const toggleModal = () => {
    setShowModal(!showModal);
    setShowFade(!showFade);
  };

  // Добавляем прослушиватель событий щелчка к слою затухания, который закрывает модальное окно и слой затухания при нажатии.
  useEffect(() => {
    const handleClick = () => {
      setShowModal(false);
      setShowFade(false);
    };

    if (showFade) {
      const fadeLayer = document.querySelector('.fade-layer');
      fadeLayer.addEventListener('click', handleClick);

      // Удаляем прослушиватель событий, когда компонент размонтируется
      return () => {
        fadeLayer.removeEventListener('click', handleClick);
      };
    }
  }, [showFade]);
  // Запрет скролла при открытом модальном окне
  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  };

  // Объявляем переменные состояния для входных значений
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Определил обработчик события для отправки формы
  const handleSubmit = event => {
    event.preventDefault();
    // Отправка значений в консоль
    console.log(name, phone);
  };
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
                Я Слава!
              </h1>
            </div>
            <div className='main-info__description-text'>
              <span>
                Я занимаюсь front-end и back-end разработкой уже более двух лет.
                Если Вам нужен интернет-магазин, верстка сайта на популярных CMS или, может быть, сайт "под ключ"?<br />Тогда свяжитесь со мной.
              </span>
            </div>
            <div className='main-info__description-button'>
              <button onClick={toggleModal} className='main-info__description-button__btn' type='button'>
                Написать мне
              </button>
            </div>
          </div>
          <div className='main-info__img'>
            <img className='main-info__img-one' src={mylogo} alt="Мое Фото" />
            <div className='main-info__img-two'></div>
          </div>
        </div>
        <div>
          {/* Отрисовка модального окна */}
          {showModal && (
            <div className="modal-window">
              <h1>Modal Window</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone:
                  <input
                    type="text"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
          {/* Рендерим слой затухания */}
          {showFade && (
            <div className="fade-layer"></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainInfo;