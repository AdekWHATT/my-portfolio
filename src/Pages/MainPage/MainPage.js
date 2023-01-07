import React from 'react';
import Header from '../../components/Header/Header';
import MainInfo from '../../components/MainInfo/MainInfo';
import DevCards from '../../components/DevCards/DevCards';
// import Technologies from '../../components/Technologies/Technologies';
import AboutMe from '../../components/AboutMe/AboutMe';
import Certificates from '../../components/Сertificates/Сertificates';
import Footer from '../../components/Footer/Footer';
import './MainPage.css';
const MainPage = () => {
  return (
    <div className='Main'>
      <Header />
      <MainInfo />
      <DevCards />
      {/* <Technologies /> */}
      <AboutMe />
      <Certificates />
      <Footer />
    </div>
  )
}

export default MainPage;