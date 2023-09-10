import './selector.css';
import previewData from '../../data/data.json';
import React from 'react';

function Selector({ slide, setSlide, nextSlide, previousSlide }) {
  return (
    <aside className='selector'>
      <div className='selector__arrow'>
        <i className="fa-solid fa-angle-up fa-2xl" onClick={previousSlide}></i>
      </div>
      <div className='selector__dot'>
        {previewData.map((item, index) => (
          <i
            key={item.id}
            className={`fa-solid fa-circle fa-lg ${slide === index ? 'selected' : ''}`}
            onClick={() => setSlide(index)}
          ></i>
        ))}
      </div>
      <div className='selector__arrow'>
        <i className="fa-solid fa-angle-down fa-2xl" onClick={nextSlide}></i>
      </div>
    </aside>
  );
}

export default Selector;
