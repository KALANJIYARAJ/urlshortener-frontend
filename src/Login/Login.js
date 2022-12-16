import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";
import { UserContext } from "../UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const users =await axios.post(`${config.api}/login`, values);
        if(users.data.activation == true){
          // console.log(users.data.activation)
        setUser(users.data)
        alert("Successfully Login");
        navigate("/shortlink");
      }else{
        alert("your account is deactivate check your email and activate your account");
      }
      } catch (error) {
        alert("incorrect username/password");
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
                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                  <img
                    src="https://media.istockphoto.com/id/1223088904/vector/flag-ribbon-welcome-old-school-flag-banner.jpg?s=612x612&w=0&k=20&c=7YSaR2mu9H2ezvyONvjtqf8HRTzBaya1wNYFfwAiW80="
                    width={"460px"}
                    height={"450px"}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <input
                          name="email"
                          onChange={formik.handleChange}
                          values={formik.values.email}
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          onChange={formik.handleChange}
                          values={formik.values.password}
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                     
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to={"/forgot"}>
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to={"/accout"}>
                        Create an Account!
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

export default Login;
