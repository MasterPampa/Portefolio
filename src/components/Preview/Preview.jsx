import './preview.css';
import data from '../../data/data.json'
import React from 'react';
import { useEffect, useState } from 'react';

import image1 from '../../images/stack.png'
import image2 from '../../images/Bigburger.webp'
import image3 from '../../images/ArgentBank.webp'
import image4 from '../../images/NinaCarducci.webp'
import image5 from '../../images/Ohmyfood.webp'
import image6 from '../../images/Kasa.webp'

import redux from '../../images/redux.svg'
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import sass from '../../images/sass.png'
import lighthouse from '../../images/lighthouse.svg'

const images = {
  0: image1,
  1: image2,
  2: image3,
  3: image4,
  4: image5,
  5: image6,
}
const figcaption = {
  1: <div><img src={react}></img><img src={js}></img><img src={sass}></img></div>,
  2: <div><img src={react}></img><img src={redux}></img><img src={sass}></img></div>,
  3: <div><img src={lighthouse}></img><img src={sass}></img><img src={html}></img></div>,
  4: <div><img src={html}></img><img src={css}></img></div>,
  5: <div><img src={html}></img><img src={sass}></img><img src={js}></img></div>,
}
const links = {
  0: "https://github.com/MasterPampa",
  1: "https://masterpampa.github.io/Bigburger/",
  2: "https://github.com/MasterPampa/ArgentBank",
  3: "https://masterpampa.github.io/NinaCarducci",
  4: "https://masterpampa.github.io/Ohmyfood",
  5: "https://masterpampa.github.io/Kasa/"
}

function Preview({ slide, isFadingOut }) {

  const [showcaseClass, setShowcaseClass] = useState('showcase');

  useEffect(() => {
    if (isFadingOut) {
      setShowcaseClass('fade-in-out2');
    } else {
      setShowcaseClass('');
    }
  }, [isFadingOut]);

  const selectedImage = images[slide];
  const selectedFigcaption = figcaption[slide];
  const selectedLink = links[slide];

  return (
    <section className='preview'>
      <span className={showcaseClass}>
          <a href={selectedLink} target='_blank'>
            <img className='img' src={selectedImage} alt={data[slide].title} />
          </a>
        <figcaption>
          {selectedFigcaption}
        </figcaption>
      </span>
    </section>
  );
}

export default Preview;