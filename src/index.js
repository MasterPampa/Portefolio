import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Border from './components/Border/Border';

import './index.css';

const App = () => {
  const [language, setLanguage] = useState('fr');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return(
    <React.StrictMode>
      <div className='container'>
        <Border />
        <div className='main_container'>
          <Header language={language} changeLanguage={changeLanguage} setLanguage={setLanguage} />
          <Carousel language={language} />
        </div>
      </div>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);