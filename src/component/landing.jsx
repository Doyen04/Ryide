import '../styles/landing.css';

import googlePlayIcon from "../assets/svg/google.svg"
import applePlayIcon from "../assets/svg/apple.svg"
import greenCheck from '../assets/svg/greenbadge.png'
import redCheck from '../assets/svg/redbadge.png'


function Landing() {

    return (
        <div className="landing-view" >
            <div className='landing-view-description'>
                <div>
                    <div className='main-description'>
                        Your Smooth Ride, <br />Just a Tap Away
                    </div>
                    <div className='sub-description'>
                        Experience hassle-free transportation with Ryide <br />
                        Reliable rides, anytime, anywhere at an affordable price
                    </div>
                </div>
                <div className='appstore-buttons-container'>
                    <div className='googleplay'>
                        <img src={googlePlayIcon} alt="" />
                        <aside>
                            Download on the <br />
                            <p> Google Play</p>
                        </aside>
                    </div>
                    <div className='appleplay'>
                        <img src={applePlayIcon} alt="" />
                        <aside>
                            Download on the <br />
                            <p>Apple Play</p>
                        </aside>

                    </div>
                </div>
            </div>
            <div className='landing-view-image' >
                <div className='top-left-float'>
                    <img src={greenCheck} alt="" />
                    <p>Accept Customers Ride Request</p>
                </div>
                <div className='bottom-right-float'>
                    <img src={redCheck} alt="" />
                    <p>Earn More Money By Driving</p>
                </div>
            </div>
        </div>
    )
}


export default Landing;