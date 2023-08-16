import React from 'react'
import imgfooter from '../Assets/Vector.png'
import Vector2 from '../Assets/Vector (2).png'
import Vector3 from '../Assets/Vector (3).png'
import Vector4 from '../Assets/Vector (4).png'
import Vector5 from '../Assets/Group.png'
function SecSix() {
    return (
        <>
            <div id='SecSix-main'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-md-3 pt-5'>
                            <h3><img src={imgfooter} /> Photography</h3>
                            <h6>Code with Sheryar</h6>
                            <p>Copyright © 2023</p>
                        </div>
                        <div className='col-md-2 pt-5'>
                            <h4>GET IN TOUCH</h4>
                            <h5 style={{ marginTop: "35px" }}>info@example.com</h5>
                            <h5>+105 773 321 7891</h5>
                        </div>
                        <div className='col-md-1 pt-5'>
                            <h4>LOCATION</h4>
                            <h5 style={{ marginTop: "35px" }}>Somewhere on
                                Earth.</h5>
                        </div>
                        <div className='col-md-3 pt-5' >
                            <h4>SECURITY AND PRIVACY</h4>
                            <h5 style={{ marginTop: "35px" }}>Privacy Policy</h5>
                            <h5>Terms of use</h5>
                        </div>
                        <div className='col-md-3 pt-3' >
                            <h4 style={{marginBottom:"20px"}}>FOLLOW US</h4>
                            <img src={Vector2} />
                            <img src={Vector3} style={{marginLeft:"10px"}}/>
                            <img src={Vector4} style={{marginLeft:"10px"}}/>
                            <img src={Vector5} style={{marginLeft:"10px"}}/>
                            <h5 style={{marginTop:"15px"}}>Get the best photography services</h5>
                            <input type='text' placeholder='Your email here' className='input-last'/>
                            <button className='butn-last'>Send</button><br/>
                            <label style={{marginTop:"20px"}}><input type="checkbox"   />By checking the box, you agree that you’re atleast 16 years of age.</label>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecSix