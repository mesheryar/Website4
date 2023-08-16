import React from 'react'
import img3 from '../Assets/pic-1.png'
import img4 from '../Assets/pic-2.png'
import img5 from '../Assets/pic-3.png'
import img6 from '../Assets/pic-4.png'
import img7 from '../Assets/pic-5.png'
function SecThree() {
    return (
        <>
            <div id='SecThree-main'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <button className='butn-1'>
                                <div className='line'>
                                    <div className='line-1'></div>
                                    <div className='lineText'><h6>About Us</h6></div>
                                    <div className='line-1'></div>
                                </div>
                            </button>
                            <h4>We Are Offering The<br />
                                Best<span> Photography</span><br />
                                Services For You</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,<br/> sed nisi elit augue vel venenatis eget purus, libero. Ut facilisi<br/> augue massa auctor adipiscing a vestibulum at. Interdum tortor<br/> lacus metus, proin dui. A pellentesque nullam tincidunt ac<br/> rutrum nullam auctor.</p>
                            <button className='butn-2'>Join Us</button>
                        </div>
                        <div className='col-md-4'>
                            <div className='pics-div'>
                                <img src= {img3}/>
                                <img src= {img4}/>
                                <img src= {img5}/>
                                <img src= {img6}/>
                                <img src= {img7}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecThree