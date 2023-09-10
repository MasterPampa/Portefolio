import './header.css'

function Header () {
    return(
        <header>
            <i className="fa-solid fa-2xl fa-bars"></i>
            <div className='links'>
                <i className="fa-brands fa-2xl fa-github"></i>
                <i className="fa-solid fa-2xl fa-envelope"></i>
            </div>
        </header>
    )
}

export default Header