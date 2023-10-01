import React, { useState } from 'react';
import Selector from '../Selector/Selector';
import Showcase from '../Showcase/Showcase';
import Preview from '../Preview/Preview';
import previewData from '../../data/data.json';

function Carousel({language}) {
  const [slide, setSlide] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const nextSlide = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      if (slide === previewData.length - 1) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
      
      setIsFadingOut(false);
    }, 500);
  };

  const previousSlide = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      if (slide === 0) {
        setSlide(previewData.length - 1);
      } else {
        setSlide(slide - 1);
      }

      setIsFadingOut(false);
    },500);
  };

  return (
    <main>
      <Selector slide={slide} nextSlide={nextSlide} previousSlide={previousSlide} setSlide={setSlide} />
      <Showcase slide={slide} language={language} isFadingOut={isFadingOut} />
      <Preview slide={slide} isFadingOut={isFadingOut} />
    </main>
  );
}

export default Carousel;