import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <span className='top_corner'></span>
      <span className='bottom_corner'></span>
      <div className='main_container'>
        <Header />
          <Carousel />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
