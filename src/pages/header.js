import React from 'react'
import { Link } from "react-router-dom";
import logo from '../homepage/images/header-logo.png';
// import logo from './';

function header() {
    return (    
        <div>
        <div id="pre-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span>Suspendisse laoreet magna vel diam lobortis imperdiet</span>
              </div>
            </div>
          </div>
        </div>

         <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} className="" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Aboutus" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                  </ul>
                  {/* <Link to="/Contact">About</Link> */}
                </div>
              </div>
            </nav>
        </div> 
    )
}

export default header;
