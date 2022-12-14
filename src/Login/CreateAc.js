import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { config } from '../config';

function CreateAc() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone: "",
          gender: "male",
          activation:false,
        },
    
        validate: (values) => {
          let error = {};
    
          if (!values.last_name) {
            error.last_name = "Please Enter a valid name";
          }
    
          if (values.last_name && (values.last_name.length <= 2 || values.last_name.length > 15)) {
            error.last_name = "username must be between 3 to 15 characters";
          }

          if (!values.first_name) {
            error.first_name = "Please Enter a valid name";
          }
    
          if (values.first_name && (values.first_name.length <= 2 || values.first_name.length > 15)) {
            error.first_name = "username must be between 3 to 15 characters";
          }
    
          if (!values.email) {
            error.email = "Please Enter a email";
          }
    
          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            error.email = "Please enter a valid email";
          }
    
          if (!values.password) {
            error.password = "Please Enter a valid password";
          }
    
          if (values.password && values.password.length !== 8) {
            error.password = "pasword must 8 characters";
          }
    
          if (!values.phone) {
            error.phone = "Please Enter your phone number";
          }
    
          if (values.phone.length !== 10) {
            error.phone = "Please Enter a valid PhoneNumber";
          }
    
          return error;
        },
        onSubmit: async (values) => {
          try {
            await axios.post(
              `${config.api}/user/register`,
              values
            );
            alert("Check your email for activation");
            formik.resetForm();
            navigate("/");
          } catch (error) {
            alert("Error");
          }
        },
      });
      return (
        <div className="container-lg mt-5 ">
          <form onSubmit={formik.handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.first_name && formik.errors.first_name ? "error-box" : ""
                    }
                        ${
                          formik.touched.first_name && !formik.errors.first_name
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <span style={{ color: "red" }}>{formik.errors.first_name}</span>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.last_name && formik.errors.last_name ? "error-box" : ""
                    }
                        ${
                          formik.touched.last_name && !formik.errors.last_name
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <span style={{ color: "red" }}>{formik.errors.last_name}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.email && formik.errors.email ? "error-box" : ""
                    }
                        ${
                          formik.touched.email && !formik.errors.email
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.password && formik.errors.password ? "error-box" : ""
                    }
                        ${
                          formik.touched.password && !formik.errors.password
                            ? "succes-box"
                            : ""
                        }
                        `}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.phone && formik.errors.phone ? "error-box" : ""
                    }
                        ${
                          formik.touched.phone && !formik.errors.phone
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <span style={{ color: "red" }}>{formik.errors.phone}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    className="form-control"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>          
              <div className="col-lg-12">
                <div className="form-group">
                  <input type={"submit"} className="btn btn-primary" />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
}

export default CreateAc