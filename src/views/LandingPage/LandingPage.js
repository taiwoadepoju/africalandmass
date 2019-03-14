import React, { Component } from 'react';
import YouTubePopUp from "../../components/YoutubePopup";
import bannerImage from '../../assets/images/banner-bg-style-4.png';
import { EMAIL_PATTERN } from '../../assets/_constants';
import HowItWorks from "./HowItWorks";
import OtherSections from "./OtherSections";

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

          <HowItWorks/>
          <OtherSections/>
          
        </div>
      </div>
    );
  }
}

export default LandingPage;
