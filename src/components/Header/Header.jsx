import './header.css'

function Header () {
    return(
        <header>
            <a href='/'><i className="fa-solid fa-house fa-2xl"></i></a>
            <div className='links'>
                <a href='https://github.com/MasterPampa' target="_blank"><i className="fa-brands fa-2xl fa-github"></i></a>
                <a target="_top" href="mailto:styvenmunhurrun@gmail.com"><i className="fa-solid fa-2xl fa-envelope"></i></a>
            </div>
        </header>
    )
}

export default Header