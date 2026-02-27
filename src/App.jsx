import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import PopularProducts from './components/PopularProducts';
import BuySection from './components/BuySection';
import PopularCategories from './components/PopularCategories'; // Փոխված է
import SaleProducts from './components/SaleProducts';
import OurWorks from './components/OurWorks';
import ContactSection from './components/ContactSection';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import NotFoundPage from './pages/NotFoundPage';

function HomePage() {
  return (
    <>
      <Header />
      <Advantages />
      <Catalog />
      <PopularProducts />
      <BuySection />
      <PopularCategories /> {/* Սա պետք է լինի PopularCategories, ոչ թե PopularProducts */}
      <SaleProducts />
      <OurWorks />
      <ContactSection />
      <Instagram />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;