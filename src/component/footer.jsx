import '../styles/footer.css'

import doublePhone from '../assets/svg/DoublePhone.svg'


function Footer(){
    return(
        <>
            <Download />
        </>
    )
}

function Download(){
    return(
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