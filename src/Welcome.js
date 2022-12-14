import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container-lg mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <h1>Welcome</h1>
        </div>
                      <Link className="btn btn-primary btn-sm" to={"/"}>
                        Logout
                      </Link>
      </div>
    </div>
  );
}

export default Welcome;
