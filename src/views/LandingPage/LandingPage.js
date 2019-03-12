import React, { Component } from 'react';
import bannerImage from '../../assets/images/banner-bg-style-4.png';
import infoIcon from '../../assets/images/icons/checklist.svg';
import SellIcon from '../../assets/images/icons/debit-card.svg';
import DateIcon from '../../assets/images/icons/calendar.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* Banner Area */}
          <section className="banner_area banner_a1">
            <img src={bannerImage} alt className="banner_bg" />
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="wow fadeInUp">Selling your land Just Got easier</h2>
                </div>

                <div className="col-md-4 bg-white shadow p-3 evaluation-form">
                  <h5 className="pb-3">Request for Land Evaluation</h5>
                  <div className="input-group row">
                    <div className="col-md-12 mx-3">
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-12 mx-3">
                      <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-12 mx-3">
                      <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-12 mx-3">
                        <button className="theme_btn btn-sm btn-block btn">Continue</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a href="#" className="theme_btn wow fadeInUp" data-wow-delay="0.2s">REQUEST FOR EVALUATION </a> */}
            </div>
            {/* <img src={bannerImage} alt className="banner_img_2 wow fadeInRight" /> */}
          </section>
          {/* Banner Area */}
          {/* Service Icon Area */}
          <section className="service_icon_area sia_4 how-it-works">
            <div className="container">
              <div className="tittle">
                <h3 className="text-center font-weight-bold">How it works</h3>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-6 wow fadeIn">
                  <div className="single_box active">
                    <a href="#" className="heding">Enter your land information</a>
                    <img src={infoIcon} alt="enter-land-info" className="works-icon" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="single_box">
                    <i className="flaticon-tick tick t_2" />
                    <a href="#" className="heding">Book a Date</a>
                    <img src={DateIcon} alt="enter-land-info" className="works-icon" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="single_box">
                    <i className="flaticon-tick tick t_3" />
                    <a href="#" className="heding">Sell your Land</a>
                    <img src={SellIcon} alt="enter-land-info" className="works-icon" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Service Icon Area */}

          {/* Other Sections */}
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 p-5">
                  <h2>Sell your land at the fastest time possible!</h2>
                  <p className="style_text">
                    Our team of well seasoned evaluators are just a click away.
                    Our team of well seasoned evaluators are just a click away.
                    Our team of well seasoned evaluators are just a click away.
                    Our team of well seasoned evaluators are just a click away.
                  </p>
                </div>
                <div className="col-md-6 split-section-right"></div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 split-section-left"></div>
                <div className="col-md-6 p-5">
                  <h2>Want to buy a land? It's now easier than ever!</h2>
                  <p className="style_text">
                    our team is ready to put you through.
                    our team is ready to put you through.
                    our team is ready to put you through.
                    our team is ready to put you through.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer Area Start */}
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
        </div>
      </div>
    );
  }
}

export default App;
