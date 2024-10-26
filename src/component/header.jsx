
import '../styles/header.css'

function Header(){
    return (
        <div className='header'>
            <div className='logo-container'>
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

        </div>
    )
}

export default Header