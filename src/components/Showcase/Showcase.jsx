import './showcase.css'
import data from '../../data/data.json';

function Showcase ( {slide} ) {
    return(
        <section className='showcase'>
            <h1>{data[slide].title}</h1>
            <p>{data[slide].description}</p>
            <h2 className={`${slide === 0 ? 'welcome' : ''}`}>Evaluated skills :</h2>
            <p>{data[slide].skills}</p>
        </section>
    )
}

export default Showcase