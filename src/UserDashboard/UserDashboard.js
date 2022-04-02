import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function UserDashboard() {
  return (
    <div className="col-sm-12 ">
      <div
        className="col-sm-12 mt-2 pt-2 pb-2 shadow-lg"
        style={{
          backgroundColor: "#2b6777",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <h1>Hitach Hikers User Profile</h1>
      </div>

      <div className="col-sm-12 pt-5 " style={{color:"grey"}}>
          <h3>Welcome, Areeba Muneeb</h3>
      </div>

      <div className="col-sm-12 shadow-lg " style={{ borderRadius: "20px" }}>
        <div className="col-sm-12 mt-4 pt-5 pb-5">
          <div className="col-sm-12">
            <h3>Reset Password</h3>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>
                  <b>Email</b>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>
                  <b>Verification Code</b>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 mt-3">
              <div className="col-sm-12">
                <label>
                  <b>Password</b>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 mt-5 pl-4">
              <button
                className="btn btn-success"
                style={{ width: "100%", backgroundColor: "#2b6777" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12  " style={{ borderRadius: "20px" }}>
        <div className="col-sm-12 pt-5 pb-5">
          <div className="row mt-3">
            <div className="col-sm-6 mt-3">
              <Link to="/">
                {" "}
                <button
                  className="btn btn-success"
                  style={{ width: "100%", backgroundColor: "#2b6777" }}
                >
                  Logout
                </button>{" "}
              </Link>
            </div>
            <div className="col-sm-6 mt-5 pl-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
