

import logo from '../assets/svg/logo.svg'
import '../styles/header.css'

function Header() {
    function toggleButton(ev){
        ev.target.style.backgroundColor = 'red'
        document.getElementsByClassName('navbar')[0].classList.toggle('show')
        document.getElementsByClassName('signup-button')[0].classList.toggle('show-button')
        setTimeout(() => {
            ev.target.style.backgroundColor = 'white'
        }, 1000)
    }
    return (
        <div className='header'>
            <section className='main-cover'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    Ryide
                </div>
                <div className='navbar'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Blog</div>
                </div>
                <div className='signup-button'>
                    Sign Up
                </div>
                <button className='toggle' onClick={toggleButton}>
                    | | |
                </button>
            </section>

        </div>
    )
}

export default Header