import React, { useState } from 'react';
import Selector from '../Selector/Selector';
import Showcase from '../Showcase/Showcase';
import Preview from '../Preview/Preview';
import previewData from '../../data/data.json';

function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === previewData.length - 1) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
  };

  const previousSlide = () => {
    if (slide === 0) {
        setSlide(previewData.length - 1);
      } else {
        setSlide(slide - 1);
      }
  };

  return (
    <main>
      <Selector slide={slide} nextSlide={nextSlide} previousSlide={previousSlide} setSlide={setSlide} />
      <Showcase slide={slide} />
      <Preview slide={slide} />
    </main>
  );
}

export default Carousel;