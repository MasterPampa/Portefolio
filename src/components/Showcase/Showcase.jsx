import './showcase.css'
import data from '../../data/data.json';

function Showcase({ slide, language }) {
    const description = language === 'fr' ? data[slide].description : data[slide].descriptionEN;
    const skills = language === 'fr' ? data[slide].skills : data[slide].skillsEN;
    const skillsTitle = language === 'fr' ? "Compétences évaluée :" : "Evaluated skills :";
    return (
        <section className='showcase'>
            <h1>{data[slide].title}</h1>
            <p>{description}</p>
            <h2 className={`${slide === 0 ? 'welcome' : ''}`}>{skillsTitle}</h2>
            <p>{skills}</p>
        </section>
    );
}

export default Showcase;
