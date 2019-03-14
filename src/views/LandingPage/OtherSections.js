import React, { Component } from "react";

class OtherSections extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default OtherSections;