import './showcase.css'
import data from '../../data/data.json';
import { useEffect, useState } from 'react';

function Showcase({ slide, language, isFadingOut }) {
  const [showcaseClass, setShowcaseClass] = useState('showcase');

  useEffect(() => {
    if (isFadingOut) {
      setShowcaseClass('fade-in-out');
    } else {
      setShowcaseClass('');
    }
  }, [isFadingOut]);

  const description = language === 'fr' ? data[slide].description : data[slide].descriptionEN;
  const skills = language === 'fr' ? data[slide].skills : data[slide].skillsEN;
  const skillsTitle = language === 'fr' ? "Compétences évaluées :" : "Evaluated skills :";
  
  return (
    <section className='showcase'>
        <span className={showcaseClass}>    
            <h1>{data[slide].title}</h1>
            <p>{description}</p>
            <h2 className={`${slide === 0 ? 'welcome' : ''}`}>{skillsTitle}</h2>
            <p>{skills}</p>
        </span>
    </section>
  );
}

export default Showcase;
