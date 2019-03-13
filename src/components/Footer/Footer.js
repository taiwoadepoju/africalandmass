import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <section className="footer_area footer_2">
        <div className="container">
          <div className="row bottom_border">
            <div className="col-lg-4 col-sm-6 wow fadeIn">
              <div className="download_2">
                <h6>We are social</h6>
                <ul>
                  <li><a href="#"><i className="fab fa-facebook" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 footer_about wow fadeIn" data-wow-delay="0.2s">
              <h3>About Company</h3>
              <ul>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Digital markeing</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6 footer_about wow fadeIn" data-wow-delay="0.4s">
              <h3>Information</h3>
              <ul>
                <li><a href="#">Team</a></li>
                <li><a href="#">Pricing plan</a></li>
                <li><a href="#">Google Map</a></li>
                <li><a href="#">Apps store</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 footer_about wow fadeIn" data-wow-delay="0.2s">
              <h3>About Company</h3>
              <ul>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Digital markeing</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="copy_right">
            <div className="row m-0">
              <div className="col-lg-9 col-md-8 p-0">
              </div>
              <p className="col-lg-3 col-md-4 order-md-first text-white">© 2019 All rights reserved</p>
            </div>
          </div>
        </div>
        <div className="shap" />
      </section>
    );
  }
}

export default Footer;