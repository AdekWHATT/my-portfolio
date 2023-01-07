import React from 'react';
import './PortfolioPage.css';
import Header from '../../components/Header/Header';
import Sites from '../../components/Sites/Sites';
import Technologies from '../../components/Technologies/Technologies';
import Footer from '../../components/Footer/Footer';
const PortfolioPage = () => {
    return (
        <div className='Portfolio'>
            <Header />
            <Sites />
            <Technologies />
            <Footer />
        </div>
    )
}

export default PortfolioPage;