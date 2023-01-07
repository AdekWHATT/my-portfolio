import MainPage from './Pages/MainPage/MainPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import { Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}
export default App;
