import React, { Component } from "react";
import infoIcon from '../../assets/images/icons/checklist.svg';
import SellIcon from '../../assets/images/icons/debit-card.svg';
import DateIcon from '../../assets/images/icons/calendar.svg';

class HowItWorks extends Component {
  render() {
    return (
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
    );
  }
}

export default HowItWorks;