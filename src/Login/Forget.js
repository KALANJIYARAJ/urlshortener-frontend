import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";

function Forget() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validate: (values) => {
      let error = {};
      if (!values.email) {
        error.email = "Please Enter a email";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Please enter a valid email";
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
       const user = await axios.post(`${config.api}/forgot`, values);
      alert(user.data)
      formik.resetForm();
      navigate("/");
      } catch (error) {
        alert("The email id does't not registered");
      }
    },
  });
return (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-password-image">
                <img
                  src="https://t4.ftcdn.net/jpg/01/65/01/77/360_F_165017799_byNziC85xNVTe02EYwwnl9LaAgctQPFr.jpg"
                  width={"460px"}
                  height={"435px"}
                  alt="Forgot password..."
                />
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">
                      Forgot Your Password?
                    </h1>
                    <p className="mb-4">
                      We get it, stuff happens. Just enter your email address
                      below and we'll send you a link to reset your password!
                    </p>
                  </div>
                  <form onSubmit={formik.handleSubmit} className="user">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        type={"text"}
                        id="exampleInputEmail"
                        placeholder="Enter Email Address..."
                        className={`form-control form-control-user ${
                          formik.touched.email && formik.errors.email
                            ? "error-box"
                            : ""
                        }
                      ${
                        formik.touched.email && !formik.errors.email
                          ? "succes-box"
                          : ""
                      }`}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Reset Password
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link to={"/accout"} className="small">
                      Create an Account!
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link to={"/"} className="small">
                      Already have an account? Login!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Forget;
