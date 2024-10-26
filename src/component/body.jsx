
import '../styles/body.css'
import iphone from '../assets/svg/phoneandcicle.svg'

function Body() {
    return (
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
    )
}

export default Body;