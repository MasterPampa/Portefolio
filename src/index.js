import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Border from './components/Border/Border';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Border />
      <div className='main_container'>
        <Header />
          <Carousel />
      </div>
    </div>
  </React.StrictMode>
);
