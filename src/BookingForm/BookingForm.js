import React from 'react'
import "../Productdetails/Productdetails.css"
import Navbarr from '../Navbar/Navbarr'

function BookingForm() {
    return (
        <div className="col-sm-12 p-0 background-gradiant-booking">
        <Navbarr/>
            <div className='col-sm-12 pt-5 pb-5'>
                <div className="container " style={{ backgroundColor: "white", borderRadius: "30px" }}>
                    <div className='col-sm-12 text-center '>
                        <h3 className='pt-4 '>Booking Form</h3>
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
                            <label><b>Email</b></label>
                                <input className='form-control' type="mail" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Phone or Mobile</b></label>
                                <input className='form-control' type="phone" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Address</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Cnic no.</b></label>
                                <input className='form-control' type="phone" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Pick City</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Time Out</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Date Out</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Time In</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Date In</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Vehicle Type</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Vehicle Name</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row pb-4 pt-4'>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Driver</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                               
                            </div>
                            <div className='col-sm-6'>
                            <div className='container'>
                            <label><b>Payment Method</b></label>
                                <input className='form-control' type="text" style={{backgroundColor:"lightgrey"}} />
                            </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='col-sm-12 '>
                                <button className='btn btn-primary mt-2 pl-4 pr-4 pt-2 pb-2' style={{borderRadius:"20px", backgroundColor:"#2B6777", borderColor:"#2B6777"}}> Booking this car </button>
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

export default BookingForm
