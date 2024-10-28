import '../styles/footer.css'

import doublePhone from '../assets/svg/DoublePhone.svg'


function Footer() {
    return (
        <>
            <Download />
            <div className='footer'>
                <div className='footer-innercover'>
                    <div className='container-for-icon'>
                        <h1>Ryide</h1>
                        <p>
                            Travel anywhere, anytime, with ease <br />
                            using Ryide hassle-free platform
                        </p>
                        <div>

                        </div>
                    </div>
                    <div className='container-for-info'>
                        <h1>Company info</h1>
                        <p> About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                    <div className='container-for-features'>
                        <h1>Features</h1>
                        <p>Ride Sharing</p>
                        <p>Personalized Rides</p>
                        <p>Driver Ratings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Download() {
    return (
        <div className='download-container'>
            <div className='download'>
                <section className='download-description'>
                    <div>
                        Download Ryide
                    </div>
                    <p>
                        Experience hassle-free transportation with Ryide. <br />
                        Reliable rides, anytime, anywhere
                    </p>
                    <button>
                        Get Started
                    </button>
                </section>
                <img src={doublePhone} alt="" />
            </div>
        </div>
    )
}

export default Footer