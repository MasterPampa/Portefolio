import './preview.css';
import data from '../../data/data.json'
import React from 'react';

import image1 from '../../images/welcome.jpg'
import image2 from '../../images/Booki.png'
import image3 from '../../images/Kasa.png'
import image4 from '../../images/ArgentBank.png'
import image5 from '../../images/77Events.png'

import redux from '../../images/redux.svg'
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import sass from '../../images/sass.png'

const images = {
  0: image1,
  1: image2,
  2: image3,
  3: image4,
  4: image5,
}
const figcaption = {
  1: <div><img src={html}></img><img src={css}></img></div>,
  2: <div><img src={html}></img><img src={sass}></img><img src={js}></img></div>,
  3: <div><img src={react}></img><img src={redux}></img><img src={sass}></img></div>,
  4: <img src={react}></img>
}
const links = {
  0: "",
  1: "https://masterpampa.github.io/Projet3_OpenClassrooms/Booki/",
  2: "",
  3: "",
  4: ""
}

function Preview({ slide }) {
  const selectedImage = images[slide];
  const selectedFigcaption = figcaption[slide];
  const selectedLink = links[slide];

  return (
    <section className='preview'>
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
    </section>
  );
}

export default Preview;