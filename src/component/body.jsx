
import '../styles/body.css'
import iphone from '../assets/svg/phoneandcicle.svg'
import iphone_ellipse from '../assets/svg/ellipsewithtwophones.svg'
import payIcon from '../assets/svg/IconBox1.svg'
import rideIcon from '../assets/svg/IconBox2.svg'
import msgIcon from '../assets/svg/IconBox0.svg'

function Body() {
    return (
        <>
            <div className='website-body'>
                <div className='main-container'>
                    <div className='container-heading'>
                        How Ryide Work
                    </div>
                    <div className='container-subheading'>
                        Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. <br />
                        The world beckons; seize its grand offerings now!
                    </div>
                </div>
                <div className="description-plus-image-container">
                    <div className='left-description'>
                        <div className='top-left'>
                            <div className='rounded-div'>1</div>
                            <div className='-head-description'>Real-time Tracking</div>
                            <div className='-sub-description'>Track your ride&apos;s progress in real- <br />time.</div>
                        </div>
                        <div className='bottom-left'>
                            <div className='rounded-div'>3</div>
                            <div className='-head-description'>Ride Options</div>
                            <div className='-sub-description'>Choose from various ride types for <br />your convenience</div>
                        </div>
                    </div>
                    <div className='center-image'>
                        <img src={iphone} alt="" />
                    </div>
                    <div className='right-description'>
                        <div className='top-right'>
                            <div className='rounded-div'>2</div>
                            <div className='-head-description'>Secure Payment</div>
                            <div className='-sub-description'>Safe and seamless payment <br />options.</div>
                        </div>
                        <div className='bottom-right'>
                            <div className='rounded-div'>4</div>
                            <div className='-head-description'>Driver Ratings</div>
                            <div className='-sub-description'>Rate drivers to ensure quality <br />service.</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='more-description'>
                <div className='more-desc-head'>
                    <p>Ready to Ride?</p>
                    <aside>Embrace life&apos;s vastness, venture forth and discover the wonders waiting beyond <br />
                    The world beckons; seize its grand offering now</aside>
                </div>
                <section className='more-desc-body'>
                    <img src={iphone_ellipse} alt="" />
                    <section className='more-desc-cards'>
                        <div className='desc-card'>
                            <img src={msgIcon} alt="" />
                            <p>Real-time Tracking</p>
                            <aside>Track your ride&apos;s progress in real-<br />time.</aside>
                        </div>
                        <div className='desc-card'>
                            <img src={payIcon} alt="" />
                            <p>Secure Payment</p>
                            <aside>Sale and seamless payment <br />options.</aside>
                        </div>
                        <div className='desc-card'>
                            <img src={rideIcon} alt="" />
                            <p>Ride Options</p>
                            <aside>Choose from various ride types for <br />your convenience </aside>
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Body;