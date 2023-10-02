import './preview.css';
import data from '../../data/data.json'
import React from 'react';
import { useEffect, useState } from 'react';

import image1 from '../../images/welcome.webp'
import image2 from '../../images/ArgentBank.webp'
import image3 from '../../images/Kasa.webp'
import image4 from '../../images/NinaCarducci.webp'
import image5 from '../../images/Ohmyfood.webp'
import image6 from '../../images/Booki.webp'

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
  1: <div><img src={react}></img><img src={redux}></img><img src={sass}></img></div>,
  2: <div><img src={html}></img><img src={sass}></img><img src={js}></img></div>,
  3: <div><img src={lighthouse}></img><img src={sass}></img><img src={html}></img></div>,
  4: <div><img src={html}></img><img src={css}></img></div>,
  5: <div><img src={html}></img><img src={css}></img></div>,
}
const links = {
  0: "",
  1: "https://masterpampa.github.io/Projet3_OpenClassrooms/Booki/",
  2: "https://masterpampa.github.io/Kasa/",
  3: "https://masterpampa.github.io/Ninacarducci",
  4: "https://masterpampa.github.io/Ohmyfood"
}

function Preview({ slide, isFadingOut }) {

  const [showcaseClass, setShowcaseClass] = useState('showcase');

  useEffect(() => {
    if (isFadingOut) {
      setShowcaseClass('fade-in-out');
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
        {slide !== 0 ? (
          <a href={selectedLink} target='_blank'>
          <img className='img' src={selectedImage} alt={data[slide].title} />
          </a>
        ) : (
          <img className='img' src={selectedImage} alt={data[slide].title} />
        )}
        <figcaption>
          {selectedFigcaption}
        </figcaption>
      </span>
    </section>
  );
}

export default Preview;