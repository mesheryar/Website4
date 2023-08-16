import React from 'react'

function SecFive() {
  return (
   <>
    <div id='SecFive-main'>
        <h1>Let’s<span>Talk</span></h1>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Let’s work together</h3>
                    <p>We are available 24 hours</p>
                    <h5>Phone</h5>
                    <p>+105 773 321 7891</p>
                    <h5>Address</h5>
                    <p>Somewhere on Earth.</p>
                    <h5>Email</h5>
                    <p>photographydemo10@gmail.com</p>
                </div>
           
{/* //////////////////////////////////////////////////////////////////// */}
                    <div className='col-md-6 pt-4'>
                    <div className='Forms'>
                        <input type='text' placeholder='Type your Name' className='input-1'></input><br/>
                        <input type='text' placeholder='Type your Gmail' className='input-1'></input><br/>
                        <input type='text' placeholder='Type your Subject' className='input-1'></input><br/>
                        <input type='text' placeholder='Type your Message ' className='input-main'></input>
                    </div>
                    <button className='butn-1' style={{marginLeft:"120px",marginTop:"30px",fontWeight:"400",fontSize:"22px"}}>Send Message</button>
                    </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default SecFive