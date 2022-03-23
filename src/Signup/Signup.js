import React from 'react'
import "../Signup/Signup.css"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function Signup() {
    return (
        <div className="col-sm-12 linear-background">
            <div className="container">
                <div className="row">
                    <div className='col-sm-6 padding-laptop'>
                        <div className="col-sm-12">
                            <div className="row ">
                                <div className="col-sm-6 p-0">
                                    <div className="col-sm-12 text-left ">
                                        <h3>Sign-up</h3>
                                    </div>

                                    <div className="col-sm-12 p-0">
                                        <div className="input-group field-size text-center mt-2">
                                            <div className="input-group-prepend ">
                                                <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-user"></i></button>
                                            </div>
                                            <input type="text" className="form-control field-background shadow-none focus-1" placeholder="Name" aria-label aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group field-size text-center mt-2">
                                            <div className="input-group-prepend ">
                                                <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-envelope"></i></button>
                                            </div>
                                            <input type="text" className="form-control field-background shadow-none focus-1" placeholder="Email" aria-label aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group field-size text-center mt-2">
                                            <div className="input-group-prepend ">
                                                <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-lock"></i></button>
                                            </div>
                                            <input type="password" className="form-control field-background shadow-none focus-1" placeholder="Password" aria-label aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group field-size text-center mt-2">
                                            <div className="input-group-prepend ">
                                                <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-lock"></i></button>
                                            </div>
                                            <input type="password" className="form-control field-background shadow-none focus-1" placeholder="Confirm Password" aria-label aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group field-size text-center mt-2">
                                            <div className="input-group-prepend ">
                                                <button className="btn btn-primary button-color" type="button"><i style={{ color: "gray" }} class="fas fa-address-card"></i></button>
                                            </div>
                                            <input type="phone" className="form-control field-background shadow-none focus-1" placeholder="Cnic no." aria-label aria-describedby="basic-addon1" />
                                        </div>
                                        
                                   
                                        <div className="col-sm-12 p-0 mt-4">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">I've read and agreed with Terms of service and our
                                                    Privacy Policy</label>
                                            </div>

                                        </div>
                                        <div className="col-sm-12 pl-0 mt-2">
                                            <button className="btn btn-primary pl-5 pr-5" style={{borderRadius:"20px", backgroundColor:"#2B6777", borderColor:"#2B6777"}}><i class="fas fa-arrow-right"></i></button>
                                        </div>
                                        <div className="col-sm-12 p-0 mt-2" style={{fontSize:"80%"}}>
                                            <span><p className="p-0 m-0">Already have an account? <p className="p-0 m-0"><b style={{color:"#2B6777"}}><Link to="/login" style={{textDecoration:"none"}}>Login</Link></b></p></p></span>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-auto">
                        <img src="Images/card.png" className="img-fluid" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
