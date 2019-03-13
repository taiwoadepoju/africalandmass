import React, { Component } from 'react';
import { Input, Label, Col, Row, FormGroup } from "reactstrap";
import { YES, NO } from '../../assets/_constants';
import Datetime from "react-datetime";
import moment from "moment";
import Select from "react-select";
import Dropzone from 'react-dropzone'

const selectOptions = [
  { label: "Lagos", value: "Lagos" },
  { label: "Ikeja", value: "Hey" },
  { label: "Ikorodu", value: "uu" },
]

const fileUploadStyle = {
  width: "40%",
  minHeight: "150px",
  padding: "20px",
  border: "1px dashed #aaa",
  borderRadius: "10px"
};

class EvaluationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      existingStructure: "",
      selectedDate: "",
      selectedLocation: "",
      preview: null,
      firstName: props.location.state && props.location.state.firstName,
      lastName: props.location.state && props.location.state.lastName,
      email: props.location.state && props.location.state.email
    }
  }

  handleRadio = (e) => {
    this.setState({
      existingStructure: e.currentTarget.value
    });
  }

  handleChangeDate = (date) => {
    return this.setState({ selectedDate: moment(date._d).format("YYYY-MM-DD") })
  }

  handleDrop = (preview) => {
    this.setState({ preview })
  }

  render() {
    const { selectedDate, preview, existingStructure, firstName, email, lastName } = this.state
    return (
      <div className="evaluation-form-section">
        <section className="container bg-white">
          <div className="p-5">
            <div className="row mb-4">
              <div className="col-md-12 p-3">
                <h5 className="mb-3">Land Evaluation Request Form</h5>
                <div className="row mb-4">
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="First Name" value={firstName} />
                  </div>
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Last Name" value={lastName} />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Email Address" value={email} />
                  </div>
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <Input type="text" className="form-control" placeholder="Address" />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6 dropdown-section">
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Select Land Location"
                      options={selectOptions}
                      onChange={(e) => this.setState({ selectedLocation: e.value })}
                    />
                  </div>
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Land Size: with Longitude &amp; Latitude (If Available)" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <Input type="textarea" className="form-control" placeholder="Land Description" />
                  </div>
                </div>

                <div className="row mb-3 mt-3">
                  <Label className="pr-3 pl-4">Upload Title Deed of Land</Label>
                  <div className="col-6">
                    <Input type="file" placeholder="Choose File" />
                  </div>
                </div><hr />

                <div className="row pt-3 pl-3 mb-3">
                  <FormGroup check className="form-check-radio">
                    <Row>
                      <Label className="pr-3">Does the land have an existing structure?</Label>
                      <Col>
                        <Label check className="px-auto">
                          <Input type="radio" name="radios" onChange={this.handleRadio} value={YES} />
                          <span className="form-check-sign" />
                          Yes
                        </Label>
                      </Col>
                      <Col>
                        <Label check>
                          <Input type="radio" name="radios" onChange={this.handleRadio} value={NO} />
                          <span className="form-check-sign" />
                          No
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>

                {existingStructure === YES && <div className="row">
                  <div className="col-12">
                    <Input type="textarea" className="form-control" placeholder="Details of Existing Structure" />
                  </div>
                </div>}
                <hr />

                <div className="row mb-3 justify-content-center">
                  <div className="col-6">
                    <Datetime
                      //defaultValue={moment().add(-1, 'days')}
                      date={selectedDate}
                      inputFormat="YYYY-MM-DD"
                      dateFormat="MMM, DD, YYYY"
                      onChange={this.handleChangeDate}
                      inputProps={{ placeholder: "Select Evaluation date" }}
                    />
                  </div>
                </div>

                <div className="row justify-content-center mt-5">
                  <Dropzone onDrop={this.handleDrop} style={fileUploadStyle}>
                    {({ getRootProps, getInputProps }) => (
                      <section style={fileUploadStyle}>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                          <button className="theme_btn btn btn-primary">Browse Files</button>
                          {preview && <div>
                            {/* {preview.map((img, index) =>
                              <img src={img} className="w-100 br1" alt="preview" key={index} />
                            )} */}
                            {preview.map((file, index) =>
                              <p key={index}>{file.name}</p>
                            )}
                          </div>}
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>

              </div>

              <div className="row justify-content-center mt-5">
                <button className="theme_btn btn-sm btn-block btn p-2">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EvaluationForm;
