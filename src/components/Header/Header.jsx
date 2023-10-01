import './header.css'
import frFlag from '../../images/fr.svg'
import enFlag from '../../images/gb.svg'

function Header({ changeLanguage, language }) {
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <header>
      <a href='/'><i className="fa-solid fa-house fa-2xl"></i></a>
      <div className='links'>
        <a href='https://github.com/MasterPampa/portefolio' target="_blank"><i className="fa-brands fa-2xl fa-github"></i></a>
        <a target="_top" href="mailto:styvenmunhurrun@gmail.com"><i className="fa-solid fa-2xl fa-envelope"></i></a>
        <div className='lang'>
          <img src={frFlag} className='flags' onClick={() => handleLanguageChange('fr')} alt='French'></img>
          <img src={enFlag} className='flags' onClick={() => handleLanguageChange('en')} alt='English'></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
