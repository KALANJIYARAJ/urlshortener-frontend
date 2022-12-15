import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { config } from "../config";
import { UserContext } from "../UserContext";
import LinkList from "./LinkList";

function ShortLink() {
  const { user} = useContext(UserContext);
  const { links, setLinks} = useContext(UserContext);

  console.log(user._id);
  const formik = useFormik({
    initialValues: {
        "longUrl": "",
        "userId":`${user._id}`,
    },
    onSubmit: async (values) => {
      try {
       const newLink = await axios.post(`${config.api}/create_link`, values);
        alert("link created");
        setLinks([...links,newLink.data])
        formik.resetForm();
      } catch (error) {
        alert("link does't created");
      }
    },
  });

  return (
    <div class="container ">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1>URL Shortener</h1>
        </div>
      </div>
<form onSubmit={formik.handleSubmit}>
<div className="row justify-content-center">    
<div className="col-lg-10">
                <div className="form-group">
                  <input
                    name="longUrl"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.longUrl}
                    type={"text"}
                    placeholder="Enter your long URL..."
                    className="form-control"/>
                </div>
              </div>

<div className="col-lg-2">
                <div className="form-group">
                  <input type={"submit"} className="btn btn-primary" />
                </div>
              </div>
          </div>
          </form>
          <LinkList/>
    </div>
  );
}

export default ShortLink;
