import React from 'react'
// import "../Home/Home.css"
import {
    Nav,
    Navbar as Navbarrr,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
// import Dropdown from 'react-multilevel-dropdown';
import { StickyContainer, Sticky } from 'react-sticky';
import "../Navbar/Navbarr.css"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";



function Navbar() {
    return (

        <>
            <div className="col-sm-12" style={{ backgroundColor: '#344E86' }}>


            </div>
            <div className="col-sm-12 p-0 navbar-fixed-top" style={{ backgroundColor: "lightgray", boxShadow: "0px 2px 4px #888888 " }} >
                {/* <StickyContainer className="container"> */}

                <Navbarrr className=" container" expand="lg" style={{ backgroundColor: 'lightgray' }}  >
                    <Navbarrr.Brand href="#">
                        <img src="Images/logo.png" className="img-fluid img-size" />
                    </Navbarrr.Brand>
                    <Navbarrr.Toggle aria-controls="navbarScroll" />
                    <Navbarrr.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: 'auto' }}
                            navbarScroll
                            id="myDIV"
                        >

                            <Nav.Link style={{color:"gray"}}>Home</Nav.Link>
                            <NavDropdown title="Sell" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link to="/estimate" style={{textDecoration:"none", color:"black"}}>Estimate</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link to="/about-us" style={{textDecoration:"none", color:"black"}}>About us</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{color:"gray"}}>Contact Us</Nav.Link>



                            <ul>
                                <li>
                                <div className="col-sm-12 p-0 mt-1"><Link to="/login">  <button className="btn btn-primary pl-4 pr-4 ml-md-1 hover-auth-button"> login </button></Link> </div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                <div className="col-sm-12 p-0 mt-1"><Link to="/signup">  <button className="btn btn-primary pl-4 pr-4 ml-md-1 hover-auth-button"> Sign-up </button></Link> </div>
                                </li>
                            </ul>










                        </Nav>

                    </Navbarrr.Collapse>
                </Navbarrr>



                {/* </StickyContainer> */}
            </div>
        </>
    )
}

export default Navbar
