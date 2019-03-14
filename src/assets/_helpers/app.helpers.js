import axios from "axios";
import { SUCCESS_RESPONSE } from "../_constants";

export const appHelpers = {
  postRequest: function (url, payload, header) {
    let reqHeader = header
      ? header
      : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };

    return axios.post(url, payload, config);
  },
  postFormDataRequest: function (url, formData, header) {
    let reqHeader = header
      ? header
      : { "Content-Type": "multipart/form-data" };
    let config = { headers: reqHeader };

    return axios.post(url, formData, config);
  },
  getRequest: function (url, header) {
    let reqHeader = header
      ? header
      : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };
  
    return axios
      .get(url, config)
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        return err
      });
  },
  
  formatBasicDropdown: (response) => {
    let data = JSON.parse(JSON.stringify(response.response))
    const options = data.map(({ id, name }) => ({ value: id, label: name }))
    return options
  },

  getUrlParams: (name, url) => {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && match[1];
  },

  formatPromiseResponse: function (res, resType) {
    let responseType =
      resType === undefined ? SUCCESS_RESPONSE : resType;
    return { status: responseType, response: res };
  },
  formatResponse: function (res) {
    return res.data;
  },
  interpretErrorResponse(error) {
    let errorMessage = "";
    if (error.response === undefined) {
      errorMessage = "check your network connection!";
    } else {
      errorMessage = error ? (error.response.data
        ? (error.response.data.message) ? error.response.data.message : error.response.data
        : "Unable to handle request") : "Unable to handle request";
    }
    if (typeof errorMessage === "string") {
      return errorMessage;
    } else {
      return "Something went wrong!";
    }
  },

  numberWithCommas: x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  removeArrayItem: (array, item) => {
    return array.filter(e => e !== item)
  },
}