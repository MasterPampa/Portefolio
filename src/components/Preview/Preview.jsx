import './preview.css';
import data from '../../data/data.json'
import React from 'react';
import image1 from '../../images/welcome.jpg'
import image2 from '../../images/Booki.png'
import image3 from '../../images/Kasa.png'
import image4 from '../../images/ArgentBank.png'
import image5 from '../../images/77Events.png'

const images = {
  0: image1,
  1: image2,
  2: image3,
  3: image4,
  4: image5,
}
 
function Preview({ slide }) {
  const selectedImage = images[slide];

  return (
    <section className='preview'>
      <img src={selectedImage} alt={data[slide].title} />
    </section>
  );
}

export default Preview;