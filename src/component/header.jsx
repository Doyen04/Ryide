import logo from '../assets/svg/logo.svg'
import '../styles/header.css'

function Header() {
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
            </section>

        </div>
    )
}

export default Header