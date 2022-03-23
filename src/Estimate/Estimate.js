import React from 'react'
import "../Productdetails/Productdetails.css"
import Navbarr from '../Navbar/Navbarr'

function Estimate() {
    return (
        <div className="col-sm-12 p-0 background-gradiant-booking">
        <Navbarr/>
            <div className='col-sm-12 pt-5 pb-5'>
                <div className="container " style={{ backgroundColor: "white", borderRadius: "30px" }}>
                    <div className='col-sm-12 text-center '>
                        <h3 className='pt-4 '>Want To Know Your Car's Worth?</h3>
                    </div>
                    <div className='col-sm-12 text-center'>
                        <img src="images/line.png" className='img-fluid' />
                    </div>
                    <div className='container'>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Name</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Model</b></label>
                                <input className='form-control' type="mail" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Year</b></label>
                                <input className='form-control' type="phone" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Owner Name</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Capacity</b></label>
                                <input className='form-control' type="phone" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Type</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Price</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Contact</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                       
                        
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='col-sm-12 '>
                                <button className='btn btn-primary mt-2 pl-4 pr-4 pt-2 pb-2' style={{borderRadius:"20px", backgroundColor:"#2B6777", borderColor:"#2B6777"}}> Know Worth! </button>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <img src="images/vec.png" className='img-fluid' alt='image crashed' />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Estimate
