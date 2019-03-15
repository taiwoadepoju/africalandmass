import React, { Component } from 'react';
import { Input, Label, Col, Row, FormGroup } from "reactstrap";
import { YES, NO, SUCCESS_RESPONSE, EMAIL_PATTERN } from '../../assets/_constants';
import Datetime from "react-datetime";
import moment from "moment";
import Select from "react-select";
import Dropzone from 'react-dropzone';
import { evaluatorService } from '../../assets/_services/evaluator.service';
import notify from '../../assets/_utils/notify';
import { history } from '../../assets/_helpers';

const selectOptions = [
  { label: "Lagos", value: "Lagos" },
  { label: "Ikeja", value: "Ikeja" },
  { label: "Ikorodu", value: "Ikorodu" },
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
      loading: false,
      triggeredSubmit: false,
      existingStructure: "",
      existingStructureDetails: "",
      dateTime: "",
      selectedFiles: [],
      firstName: props.location.state && props.location.state.firstName,
      lastName: props.location.state && props.location.state.lastName,
      email: props.location.state && props.location.state.email,
      description: "",
      location: "",
      size: "",
      phone: "",
      titleDeed: "",
      address: "",
      uploadedFile: []
    }
  }

  handleRadio = (e) => {
    this.setState({
      existingStructure: e.currentTarget.value
    });
  }

  handleChangeDate = (date) => {
    return this.setState({ dateTime: moment(date._d).format("YYYY-MM-DD hh:mm:ss") })
  }

  handleChange = (e) => {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDrop = (files) => {
    if (this.state.selectedFiles.length === 0) {
      this.setState({ selectedFiles: files })
    } else {
      this.setState({ selectedFiles: this.state.selectedFiles.concat(files) })
    }
  }

  handleRemoveFile = (idx) => (e) => {
    this.setState({
      selectedFiles: this.state.selectedFiles.filter((s, sidx) => idx !== sidx)
    });
  }

  handleUpload = async () => {
    this.setState({ triggeredSubmit: true })
    const { firstName, lastName, email, location, size, phone, dateTime, existingStructure, existingStructureDetails, address, selectedFiles } = this.state

    if(firstName === "" || lastName === "" || email === "" || location === "" || size === "" || phone === "" || dateTime === "" || existingStructure === "" || (existingStructure === "true" && existingStructureDetails === "") || address === ""){
      notify.toastError("You must fill all required fields!")
      return;
    }
    if(selectedFiles.length < 1){
      notify.toastError("You must upload all necessary documents!")
      return;
    }

    const emailCheck = EMAIL_PATTERN.test(email)
    if(emailCheck === false){
      notify.toastError("Invalid Email Address")
      return;
    }

    this.setState({ loading: true })

    let formData = new FormData();
    var arr = selectedFiles;
    for (var i = 0; i < arr.length; i++) {
      formData.append('files', arr[i]);
    }
    try {
      const res = await evaluatorService.uploadEvaluationDocuments(formData);
      await this.setState({ loading: false, triggeredSubmit: false });
      if (res.status === SUCCESS_RESPONSE) {
        await this.setState({ uploadedFile: res.response });
        this.handleSubmit();
      }
      else {
        notify.toastError(`${res.response}`);
      }
    }
    catch (error) {
      notify.toastError(`${error}`);
    }
  }

  handleSubmit = () => {
    const { firstName, lastName, email, description, location, size, phone, dateTime, existingStructure, existingStructureDetails, address, uploadedFile } = this.state
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email,
      description,
      location,
      size,
      phone,
      dateTime,
      existingStructure,
      existingStructureDetails,
      address,
      uploadedFile
    }

    return evaluatorService.requestForEvaluation(payload)
      .then(res => {
        this.setState({ loading: false, triggeredSubmit: false })
        if (res.status === SUCCESS_RESPONSE) {
          notify.toastSuccess("Your request has been submitted successfully")
          history.goBack()
        } else {
          notify.toastError(`${res.response}`)
        }
      }).catch(error => { notify.toastError(`${error}`) }
      )
  }

  render() {
    const { dateTime, selectedFiles, existingStructure, firstName, email, lastName, address, description, size, phone, existingStructureDetails, loading, triggeredSubmit, location } = this.state

    return (
      <div className="evaluation-form-section">
        <section className="container bg-white">
          <div className="p-5">
            <div className="row mb-4">
              <div className="col-md-12 p-3">
                <h5 className="mb-3">Land Evaluation Request Form</h5>
                <div className="row mb-4">
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange} />
                    {(!!triggeredSubmit && firstName === "")&& <p className="text-danger text-left" >First name is required</p>}
                  </div>
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange} />
                    {(!!triggeredSubmit && lastName === "") && <p className="text-danger text-left" >Last name is required</p>}
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6">
                    <Input type="text" className="form-control" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />
                    {(!!triggeredSubmit && email === "") && <p className="text-danger text-left" >Email is required</p>}
                  </div>
                  <div className="col-6">
                    <Input type="number" className="form-control" placeholder="Phone Number" name="phone" value={phone} onChange={this.handleChange} />
                    {(!!triggeredSubmit && phone === "") && <p className="text-danger text-left" >Phone number is required</p>}
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <Input type="text" className="form-control" placeholder="Address" name="address" value={address} onChange={this.handleChange} />
                    {(!!triggeredSubmit && address === "") && <p className="text-danger text-left" >Address is required</p>}
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6 dropdown-section">
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Select Land Location"
                      options={selectOptions}
                      onChange={(e) => this.setState({ location: e.value })}
                    />
                    {(!!triggeredSubmit && location === "") && <p className="text-danger text-left" >Location is required</p>}
                  </div>
                  <div className="col-6">
                    <Input type="text" name="size" value={size} className="form-control" placeholder="Land Size" onChange={this.handleChange} />
                    {(!!triggeredSubmit && size === "") && <p className="text-danger text-left" >Land size is required</p>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <Input type="textarea" name="description" value={description} className="form-control" placeholder="Land Description" onChange={this.handleChange} />
                  </div>
                </div>
                <hr />

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
                  {(!!triggeredSubmit && existingStructure === "") && <p className="text-danger text-left" >You must select an option</p>}
                </div>

                {existingStructure === "true" && <div className="row">
                  <div className="col-12">
                    <Input type="textarea" name="existingStructureDetails" value={existingStructureDetails} className="form-control" placeholder="Details of Existing Structure" onChange={this.handleChange} />
                    {(!!triggeredSubmit && (existingStructure === "true" && existingStructureDetails === "")) && <p className="text-danger text-left" >Details of existing structure is required</p>}
                  </div>
                </div>}
                <hr />

                <div className="row mb-3 justify-content-center">
                  <div className="col-6">
                    <Datetime
                      //closeOnSelect
                      date={dateTime}
                      inputFormat="YYYY-MM-DD hh:mm:ss"
                      dateFormat="MMM, DD, YYYY"
                      onChange={this.handleChangeDate}
                      inputProps={{ placeholder: "Select Evaluation date" }}
                    />
                    {(!!triggeredSubmit && dateTime === "") && <p className="text-danger text-left" >Evaluation date is required</p>}
                  </div>
                </div>

                <div className="row justify-content-center mt-5">
                  <Dropzone onDrop={this.handleDrop} style={fileUploadStyle}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div>
                          <input className="d-none" />
                          <p><strong>Upload all files here including title deed of land, pictures and other relevant documents</strong></p><hr />
                          <p>Drag and drop files here, or click button below to select files</p><br />
                          <button className="theme_btn btn btn-primary">Browse Files</button>
                          {selectedFiles && <div className="mt-3">
                            {selectedFiles.map((file, index) =>
                              <p key={index}><i className="fa fa-window-close text-danger px-2 remove-document-icon" onClick={this.handleRemoveFile(index)}></i> {file.name}</p>
                            )}
                          </div>}
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
              </div>

              <button className="theme_btn btn btn-md mx-auto d-block mt-5" onClick={this.handleUpload}>{loading ? "Sending..." : "Submit"}</button>
              <br/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EvaluationForm;
