import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Vector from '../Assets/Vector.png'
function Navbarr() {
  return (
    <div className='nv-bar' >
      <Navbar collapseOnSelect expand="lg" className="bg-dark" >
        <Container>
        <Navbar.Brand href="#home"><img src={Vector}/></Navbar.Brand>
          <Navbar.Brand href="#home"><h2 style={{color:"white"}}>PHOTOGRAPHY</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white",backgroundColor:"silver"}} />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto " >

              <Nav.Link href="#Home" style={{marginRight:"60px",color:"white",fontFamily:"Karla"}}>Home</Nav.Link>
              <Nav.Link href="#SecThree-main" style={{marginRight:"60px",color:"white",fontFamily:"Karla"}}>About Us</Nav.Link>
              <Nav.Link href="#services" style={{marginRight:"60px",color:"white",fontFamily:"Karla"}}>Services</Nav.Link>
              <Nav.Link href="#SecFive-main" style={{marginRight:"60px",color:"white",fontFamily:"Karla"}}>Contact Us</Nav.Link>
             
              <button type="button" class="btn btn-dark btn-outline-light" style={{marginRight:"60px"}}>Join Us</button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr