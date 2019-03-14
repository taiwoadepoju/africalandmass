import React, { Component } from 'react';
import YouTubePopUp from "../../components/YoutubePopup";
import bannerImage from '../../assets/images/banner-bg-style-4.png';
import infoIcon from '../../assets/images/icons/checklist.svg';
import SellIcon from '../../assets/images/icons/debit-card.svg';
import DateIcon from '../../assets/images/icons/calendar.svg';
import { EMAIL_PATTERN } from '../../assets/_constants';

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggeredSubmit: false,
      emailError: false,
      firstName: "",
      lastName: "",
      email: ""
    }
  }

  handleOpenFullForm = () => {
    this.setState({ triggeredSubmit: true })
    const { firstName, lastName, email } = this.state
    if( firstName === "" || lastName === "" || email === ""){
      return;
    }

    const emailCheck = EMAIL_PATTERN.test(email)
    if(emailCheck === false){
      this.setState({ emailError: true})
      return;
    }
    this.props.history.push({
      pathname: `/evaluation-form`,
      state: { 
        firstName,
        lastName,
        email
      }
    })
  }

  handleChange = (e) => {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { firstName, lastName, email, triggeredSubmit, emailError } = this.state
   
    return (
      <div>
        <div>
          {/* Banner Area */}
          <section className="banner_area banner_a1">
            <img src={bannerImage} alt="banner" className="banner_bg" />
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="wow fadeInUp">Selling your Land Just Got Easier</h2>
                  <div className="play-button-section">
                    <YouTubePopUp/>
                  </div>
                </div>
                <div className="col-md-4 bg-white shadow p-3 evaluation-form">
                  <h5 className="pb-3">Request for Land Evaluation</h5>
                  <div className="input-group row">
                    <div className="col-md-12 mx-3 mb-3">
                      <input type="text" className="form-control" placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange} />
                      {(!!triggeredSubmit && firstName === "") && <span className="text-danger">First name is required</span>}
                    </div>
                    <div className="col-md-12 mx-3 mb-3">
                      <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange} />
                      {(!!triggeredSubmit && lastName === "") && <span className="text-danger">Last name is required</span>}
                    </div>
                    <div className="col-md-12 mx-3 mb-3">
                    <input type="text" className="form-control" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />
                    {(!!triggeredSubmit && email === "") &&<span className="text-danger">Email address is required</span>}
                    {emailError && <span className="text-danger">Invalid email address</span>}
                    </div>
                    <div className="col-12 mx-3">
                      <button className="theme_btn btn-sm btn-block btn" onClick={this.handleOpenFullForm}>Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    <span className="heding">Enter your land information</span>
                    <img src={infoIcon} alt="enter-land-info" className="works-icon" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="single_box">
                    <i className="flaticon-tick tick t_2" />
                    <span className="heding">Book a Date</span>
                    <img src={DateIcon} alt="enter-land-info" className="works-icon" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="single_box">
                    <i className="flaticon-tick tick t_3" />
                    <span className="heding">Sell your Land</span>
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
        </div>
      </div>
    );
  }
}

export default LandingPage;
