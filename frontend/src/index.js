import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './App.css';
import HomePage from './Landing_page/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import AboutPage from './Landing_page/About/AboutPage';
import PricingPage from './Landing_page/Pricing/PricingPage';
import ProductPage from './Landing_page/Products/ProductPage';
import SupportPage from './Landing_page/Support/SupportPage';
import SignUpLoginPage from './Landing_page/SignUpLogin/SignUpLoginPage';
import PageNotFound from './Landing_page/common_components/PageNotFound';
import Navbar from './Landing_page/common_components/Navbar';
import Footer from './Landing_page/common_components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/*" element={<SignUpLoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />   
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
