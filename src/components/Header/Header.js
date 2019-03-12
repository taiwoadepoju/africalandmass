import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="main_header_area sticky-top shadow">   
        <nav className="navbar navbar-expand-lg"> 
          <h6 className="float-left pt-2">Africa Land Mass</h6>
          <a className="navbar-brand" href="index.html">
            {/* <img src="images/logo-2.png" alt />   */}
            
          </a> 
          {/* Small Divice Menu*/}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar_supported"> 
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse navbar_supported">
            <ul className="navbar-nav"> 
              {/* <li className="dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-toggle="dropdown">Home</a>
                <ul className="dropdown-menu">
                  <li><a href="index.html" className="active">Home App showcase</a></li>
                  <li><a href="index-saas.html">Home SaaS</a></li>  
                  <li><a href="index-agency.html">Home Agency</a></li>  
                  <li><a href="index-seo.html">Home SEO</a></li>  
                </ul>
              </li>  */}
              <li><a href="servises.html">Home</a></li>   
              <li><a href="contact.html">About Us</a></li>  
              <li><a href="contact.html">How it works</a></li>  
              <li><a href="#" className="theme_btn primary btn-sm">Sign in</a></li>  
            </ul>   
          </div>
        </nav>   
      </header>
    );
  }
}

export default Header;