import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { config } from '../config';

function Activation() {
    const navigate = useNavigate();
    const param = useParams();

    const formik = useFormik({
        initialValues: {
         activation:true
        },
        onSubmit: async (values) => {
          try {
           
            await axios.put(
              `${config.api}/activation/${param.userId}`,
              values
            );
            alert("Your Account Activated");
            formik.resetForm();
            navigate("/");
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
              <div className="col-lg-4">
                <div className="form-group">
                  <button type={"submit"} className="btn btn-primary">Activate</button>
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}

export default Activation