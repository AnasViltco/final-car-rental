import React, { Component, useEffect, useState } from 'react'
import Navbarr from '../Navbar/Navbarr'
import "../Homepage/Homepage.css"
import Catagorycards from './Catagorycards'
import Catagorycard2 from './Catagorycard2'
import Carousel from 'react-bootstrap/Carousel'
import "aos/dist/aos.css";
import Aos from "aos";

const Homepage = () => {

    const baseUrl = "https://jsonplaceholder.typicode.com/";

    const axios = require("axios");
   




    useEffect(() => {

        Aos.init({
            offset: 200,
            duration: 1000,
        });
        

    }, []);








    return (
        <div className="col-sm-12 p-0">
            <Navbarr />
            <div className="col-sm-12 p-0 mt-3">
                {/* <video autoPlay muted loop >
                    <source src="video/video.mp4" type="video/mp4" />


                </video> */}
                <div className='col-sm-12'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="img-fluid"
                            src="../Images/b1.png"
                            alt="First slide"
                            style={{width:"100%", borderRadius:"10px"}}
                        />
                        <Carousel.Caption>
                            <h3>Rent a car</h3>
                            <p> Detail of the Car </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="img-fluid"
                            src="../Images/b2.jpg"
                            alt="Second slide"
                            style={{width:"100%", borderRadius:"10px"}}
                        />
                        <Carousel.Caption>
                            <h3>Rent a car</h3>
                            <p>Detail of the Car</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="../Images/b3.jpg"
                            alt="Third slide"
                            style={{width:"100%", borderRadius:"10px"}}
                        />
                        <Carousel.Caption>
                            <h3>Rent a car</h3>
                            <p>Detail of the Car</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

            </div>
            <div className="col-sm-12 mt-4 text-center">
                <h2 data-aos="zoom-in"><b>RENT A CAR</b></h2>
                <img data-aos="zoom-in" src="images/line.png" className="img-fluid" />
            </div>
            <div className="col-sm-12" id="bg-image">
                <div className="row"
                >
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="col-sm-12 pt-3 pb-4 text-center">
                            <p data-aos="zoom-in" style={{ color: "gray" }}> <b>In publishing and graphic design, Lorem ipsum is a placeholder<br />
                                text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</b> </p>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

            </div>
            <div data-aos="zoom-in" className="container">
                <h3>Select Vehicle That Suits Your Style</h3>
            </div>
            <div data-aos="fade-up" className="container">
                <Catagorycards  />
            </div>
            {/* <div data-aos="zoom-in" className="container">
                <h3>Casual</h3>
            </div>
            <div data-aos="fade-up" className="container">
                <Catagorycard2 />
            </div>
            <div data-aos="zoom-in" className="container">
                <h3>Luxury</h3>
            </div>
            <div data-aos="fade-up" className="container">
                <Catagorycards />
            </div>
            <div data-aos="zoom-in" className="container">
                <h3>High-roof</h3>
            </div>
            <div data-aos="fade-up" className="container">
                <Catagorycards />
            </div> */}
            <div className="col-sm-12 back-1 text-center">
                <h2 data-aos="zoom-in">SELL A CAR</h2>
                <img data-aos="zoom-in" src="images/line.png" />
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <p data-aos="zoom-in">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.</p>
                        <button data-aos="zoom-in" className="btn btn-primary pl-5 pr-5 pt-2 pb-2" style={{ backgroundColor: '#2B6777', border: "#2B6777", color: "white", borderRadius: "20px" }}>Form</button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

            </div>
            <div className="col-sm-12 bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 m-auto ">

                            <h2 id="mobile-response" data-aos="fade-right" style={{ color: 'white' }}>ABOUT US</h2>
                            <img data-aos="fade-right" src="Images/line.png" className="img-fluid" style={{ width: "25%" }} />
                            <p data-aos="fade-right" style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus felis, vehicula nec luctus ut, luctus ac est.
                                Duis mattis imperdiet elementum. In viverra ligula vitae massa euismod, vitae interdum tellus maximus.
                                Vivamus vel risus quis mauris tempus mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Fusce diam lectus, vehicula sed vestibulum vestibulum, tempor non velit. Cras volutpat lectus egestas
                                elementum lobortis. Nam eu dignissim lorem. Quisque a neque tempor, euismod ante ut, tempus est.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vestibulum nunc sed enim
                                iaculis lacinia. Donec eget nisi eget sapien scelerisque </p>
                            <button data-aos="fade-right" className="btn btn-primay pt-2 pb-2 pl-4 pr-4" style={{ backgroundColor: "#2B6777", color: "white", borderRadius: "20px" }}>
                                Read More
                            </button>
                        </div>
                        <div className="col-sm-6 mt-4 " id="hide">
                            <div className="col-sm-12 " data-aos="fade-left" >
                                <div className="col-sm-12 scrollbar" id="style-7" style={{ borderRadius: "20px" }}>
                                    <div className="col-sm-12">
                                        <div className="col-sm-12">
                                            <h1 >
                                                <h3 className="mb-0 pb-0 pt-4">TESTIMONIALS</h3>
                                                <img src="Images/line.png" className="img-fluid" style={{ width: "30%" }} />




                                            </h1>
                                        </div>
                                    </div>

                                    <div className=" force-overflow " >


                                        <div className="col-sm-12">
                                            <div className="col-sm-12 " >


                                                <div className="col-sm-12 " style={{ borderRadius: "20px", backgroundColor: "#C8D8E4" }}>
                                                    <div className="row p-2" style={{ marginTop: "5%" }}>
                                                        <div className="col-sm-2 text-center">
                                                            <img src="https://www.mul.edu.pk/images/testimonials/nabia-sajid_13.jpg" className="img-fluid" style={{ width: "90%", borderRadius: "40px" }} />
                                                        </div>
                                                        <div className="col-sm-10 m-auto">
                                                            <h4>Arfa</h4>

                                                        </div>
                                                        <div className="col-sm-12 pl-4 pt-2">
                                                            <p>Vivamus accumsan neque posuere venenatis congue. Aliquam dictum cursus
                                                                lorem pellentesque euismod. Vivamus et ante sollicitudin, dapibus neque ut,
                                                                mollis nunc. Vivamus volutpat mauris vel urna accumsan accumsan.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12" style={{ borderRadius: "20px", backgroundColor: "#C8D8E4" }}>
                                                    <div className="row p-2" style={{ marginTop: "5%" }}>
                                                        <div className="col-sm-2 text-center">
                                                            <img src="https://www.mul.edu.pk/images/testimonials/nabia-sajid_13.jpg" className="img-fluid" style={{ width: "90%", borderRadius: "40px" }} />
                                                        </div>
                                                        <div className="col-sm-10 m-auto">
                                                            <h3>Username</h3>

                                                        </div>
                                                        <div className="col-sm-12 pl-4 pt-2">
                                                            <p>Vivamus accumsan neque posuere venenatis congue. Aliquam dictum cursus
                                                                lorem pellentesque euismod. Vivamus et ante sollicitudin, dapibus neque ut,
                                                                mollis nunc. Vivamus volutpat mauris vel urna accumsan accumsan.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12" style={{ borderRadius: "20px", backgroundColor: "#C8D8E4" }}>
                                                    <div className="row p-2" style={{ marginTop: "5%" }}>
                                                        <div className="col-sm-2 text-center">
                                                            <img src="https://www.mul.edu.pk/images/testimonials/nabia-sajid_13.jpg" className="img-fluid" style={{ width: "90%", borderRadius: "40px" }} />
                                                        </div>
                                                        <div className="col-sm-10 m-auto">
                                                            <h3>Username</h3>

                                                        </div>
                                                        <div className="col-sm-12 pl-4 pt-2">
                                                            <p>Vivamus accumsan neque posuere venenatis congue. Aliquam dictum cursus
                                                                lorem pellentesque euismod. Vivamus et ante sollicitudin, dapibus neque ut,
                                                                mollis nunc. Vivamus volutpat mauris vel urna accumsan accumsan.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 mb-3" style={{ borderRadius: "20px", backgroundColor: "#C8D8E4" }}>
                                                    <div className="row p-2" style={{ marginTop: "5%" }}>
                                                        <div className="col-sm-2 text-center">
                                                            <img src="https://www.mul.edu.pk/images/testimonials/nabia-sajid_13.jpg" className="img-fluid" style={{ width: "90%", borderRadius: "40px" }} />
                                                        </div>
                                                        <div className="col-sm-10 m-auto">
                                                            <h3>Username</h3>

                                                        </div>
                                                        <div className="col-sm-12 pl-4 pt-2">
                                                            <p>Vivamus accumsan neque posuere venenatis congue. Aliquam dictum cursus
                                                                lorem pellentesque euismod. Vivamus et ante sollicitudin, dapibus neque ut,
                                                                mollis nunc. Vivamus volutpat mauris vel urna accumsan accumsan.</p>
                                                        </div>
                                                    </div>
                                                </div>






                                            </div>
                                        </div>






                                    </div>




                                </div>
                            </div>








                        </div>
                    </div>
                </div>
            </div>



            <div className="col-sm-12" data-aos="fade-up" style={{ backgroundColor: "#2B6777" }}>
                <div className="container">
                    <div className="row" style={{ color: "white" }}>
                        <div className="col-sm-3 pt-5 pb-5">
                            <h4>Contact Us</h4>
                            <h6 style={{ color: "black" }}>Location:</h6>
                            <h6>Wapda Town, lahore</h6>
                            <h6 style={{ color: "black" }}>Phone:</h6>
                            <h6>+989889898</h6>
                            <h6 style={{ color: "black" }}>Email:</h6>
                            <h6>hitchhikers@gmail.com</h6>

                        </div>
                        <div className="col-sm-3 pt-5">
                            <h4>Usefull Links</h4>
                            <h6><i class="fas fa-chevron-right"></i> Home</h6>
                            <h6><i class="fas fa-chevron-right"></i> Home</h6>
                            <h6><i class="fas fa-chevron-right"></i> Home</h6>
                            <h6><i class="fas fa-chevron-right"></i> Home</h6>
                        </div>
                        <div className="col-sm-3 pt-5">
                            <h4>Our services</h4>
                            <h6><i class="fas fa-chevron-right"></i> Rent a Car</h6>
                            <h6><i class="fas fa-chevron-right"></i> Sell a Car</h6>
                        </div>
                        <div className="col-sm-3 pt-5 pb-4">
                            <h4>Our social links</h4>
                            <span className="pr-2"><i class="fab fa-twitter"></i></span><span className="pr-2"><i class="fab fa-instagram"></i></span><span className="pr-2"><i class="fab fa-skype"></i></span><span className="pr-2" ><i class="fab fa-facebook"></i></span><span><i class="fab fa-linkedin-in"></i></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-sm-12">
                <div className="container pt-2 pb-2 m-auto">
                    <h6 >© Copyright Hitch Hikers. All Rights Reserved</h6>
                </div>
            </div>

        </div>
    );
};

export default Homepage
