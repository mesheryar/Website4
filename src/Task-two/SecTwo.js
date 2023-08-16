import React from 'react'
import img1 from '../Assets/image-1.png'
import img2 from '../Assets/Camera.jpg'
function SecTwo() {
  return (
    <>
      <div id='Sectwo-main'>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
              <img src={img1}/>
          </div>
          <div className='col-md-6'>
            
            <img src={img2} className='camera'/>
           <p>Focus</p>
           <h3>Photography</h3>
           <p>Services</p>
           
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SecTwo