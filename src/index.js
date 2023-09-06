import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Preview from './components/Preview/Preview';
import Footer from './components/Footer/Footer';
import Selector from './components/Selector/Selector';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <span className='top_corner'></span>
      <span className='bottom_corner'></span>
      <div className='main_container'>
        <Header />
        <main>
          <Selector />
          <Showcase />
          <Preview />
        </main>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
