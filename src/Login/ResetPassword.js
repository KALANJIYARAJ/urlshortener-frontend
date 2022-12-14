import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { config } from '../config';

function ResetPassword() {
  const navigate = useNavigate();
  const param = useParams();

console.log(param.userId);

    const formik = useFormik({
        initialValues: {
          password: "",
          // password1: "",
        },
    
        validate: (values) => {
          let error = {};
    
          if (!values.password) {
            error.password = "Please Enter a valid password";
          }
    
          if (values.password && values.password.length !== 8) {
            error.password = "pasword must 8 characters";
          }
    
          return error;
        },
        onSubmit: async (values) => {
          try {
            if(formik.values.password === formik.values.password1){
            await axios.post(
              `${config.api}/reset/${param.userId}`,
              values
            );
            alert("Success");
            formik.resetForm();
            navigate("/");
          }else{
            alert("password doesn't same");
        }
        }
           catch (error) {
            alert("Error");
          }
        },
      });
  return (
    <div className="container-lg mt-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>New Password</label>
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
              <div className="col-lg-6">
                <div className="form-group">
                  <label>ReEnter Password</label>
                  <input
                    name="password1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password1}
                    type={"text"}
                    className="form-control" 
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input type={"submit"} className="btn btn-primary" />
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}

export default ResetPassword