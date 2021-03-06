import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-footer py-3 mt-5">
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; Copyright 2022 Cars Den
              
            </p>
          </div>
          <div className="col-md-6 gap-3 d-flex justify-content-center">
            <Link to="/">Home</Link> |<Link to="/blog">Blog</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
