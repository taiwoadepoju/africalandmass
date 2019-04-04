import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";


class Header extends Component {
  render() {
    return (
      <header className="main_header_area sticky-top shadow">   
        <nav className="navbar navbar-expand-lg"> 
          <img src={Logo} alt="africa land mass logo" className="img-fluid land-mass-logo" /> 
          {/* <Link className="navbar-brand" to="/">
            <img src={Logo} alt="africa land mass logo" className="img-fluid land-mass-logo" />  
          </Link>  */}
          {/* Small Divice Menu*/}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar_supported"> 
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse navbar_supported">
            <ul className="navbar-nav"> 
              <li><Link to="/">Home</Link></li>   
              <li><Link to="/">About Us</Link></li>  
              <li><Link to="/">How it works</Link></li>  
              <li><Link to="/" className="theme_btn primary btn-sm">Sign in</Link></li>  
            </ul>   
          </div>
        </nav>   
      </header>
    );
  }
}

export default Header;