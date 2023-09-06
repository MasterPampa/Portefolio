import './header.css'

function Header () {
    return(
        <header>
            <i class="fa-solid fa-2xl fa-bars"></i>
            <div className='links'>
                <i class="fa-brands fa-2xl fa-github"></i>
                <i class="fa-solid fa-2xl fa-envelope"></i>
            </div>
        </header>
    )
}

export default Header