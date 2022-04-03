import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/login/actions";
import Message from "../components/Messages";
import Loader from "../components/Loader";
import "../Signup/Signup.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function Signup({ location, history }) {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  console.log("Use Selectore api hit point", userRegister);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is Required")
      .matches(/^[aA-zZ]+$/, "Invalid First name"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    city: Yup.string()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "Invalid City")
      .required("City name is required"),
    country: Yup.string()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "Invalid Country")
      .required("Country name is required"),
    phone: Yup.string()
      .matches(
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\\\\/]?)?((?:\(?\d{1,}\)?[\-\.\\\\/]?){0,})(?:[\-\.\\\\/]?(?:#|ext\.?|extension|x)[\-\.\\\\/]?(\d+))?$/i,
        "Phone number should be numeric only!"
      )
      .required("Phone number is required")
      .min(10, "Phone number must be at least 10 characters")
      .max(17, "Phone number must be at least 17 characters"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      await dispatch(
        register({
          name: values.name,
          email: values.email,
          contact: values.contact,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      );
    },
  });

  return (
    <div className="col-sm-12 linear-background">
      <div className="container">
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <div className="row">
          <div className="col-sm-6 padding-laptop">
            <div className="col-sm-12">
              <div className="row ">
                <div className="col-sm-6 p-0">
                  <div className="col-sm-12 text-left ">
                    <h3>Sign-up</h3>
                  </div>

                  <div className="col-sm-12 p-0">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="input-group field-size text-center mt-2">
                        <div className="input-group-prepend ">
                          <button
                            className="btn btn-primary button-color"
                            type="button"
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fas fa-user"
                            ></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control field-background shadow-none focus-1"
                          placeholder="Name"
                          aria-label
                          aria-describedby="basic-addon1"
                          value={formik.values.name}
                          onChange={(e) => {
                            formik.setFieldValue("name", e.target.value);
                          }}
                          />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error">{formik.errors.name}</div>
                        ) : null}
                      </div>
                      <div className="input-group field-size text-center mt-2">
                        <div className="input-group-prepend ">
                          <button
                            className="btn btn-primary button-color"
                            type="button"
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fas fa-envelope"
                            ></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control field-background shadow-none focus-1"
                          placeholder="Email"
                          aria-label
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            formik.setFieldValue("email", e.target.value);
                          }}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error">{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="input-group field-size text-center mt-2">
                        <div className="input-group-prepend ">
                          <button
                            className="btn btn-primary button-color"
                            type="button"
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fas fa-lock"
                            ></i>
                          </button>
                        </div>
                        <input
                          type="password"
                          className="form-control field-background shadow-none focus-1"
                          placeholder="Password"
                          aria-label
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            formik.setFieldValue("password", e.target.value);
                          }}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="error">{formik.errors.password}</div>
                        ) : null}
                      </div>
                      <div className="input-group field-size text-center mt-2">
                        <div className="input-group-prepend ">
                          <button
                            className="btn btn-primary button-color"
                            type="button"
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fas fa-lock"
                            ></i>
                          </button>
                        </div>
                        <input
                          type="password"
                          className="form-control field-background shadow-none focus-1"
                          placeholder="Confirm Password"
                          aria-label
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "confirmPassword",
                              e.target.value
                            );
                          }}
                        />
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword ? (
                          <div className="error">
                            {formik.errors.confirmPassword}
                          </div>
                        ) : null}
                      </div>
                      <div className="input-group field-size text-center mt-2">
                        <div className="input-group-prepend ">
                          <button
                            className="btn btn-primary button-color"
                            type="button"
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fas fa-address-card"
                            ></i>
                          </button>
                        </div>
                        <input
                          type="phone"
                          className="form-control field-background shadow-none focus-1"
                          placeholder="phone no."
                          aria-label
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            formik.setFieldValue("contact", e.target.value);
                          }}
                        />
                        {formik.touched.contact && formik.errors.contact ? (
                          <div className="error">{formik.errors.contact}</div>
                        ) : null}
                      </div>

                      <div className="col-sm-12 p-0 mt-4">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            I've read and agreed with Terms of service and our
                            Privacy Policy
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 pl-0 mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary pl-5 pr-5"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#2B6777",
                            borderColor: "#2B6777",
                          }}
                        >
                          <i class="fas fa-arrow-right"></i>
                        </button>
                      </div>
                      <div
                        className="col-sm-12 p-0 mt-2"
                        style={{ fontSize: "80%" }}
                      >
                        <span>
                          <p className="p-0 m-0">
                            Already have an account?{" "}
                            <p className="p-0 m-0">
                              <b style={{ color: "#2B6777" }}>
                                <Link
                                  to="/login"
                                  style={{ textDecoration: "none" }}
                                >
                                  Login
                                </Link>
                              </b>
                            </p>
                          </p>
                        </span>
                      </div>
                    </form>
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
  );
}

export default Signup;
