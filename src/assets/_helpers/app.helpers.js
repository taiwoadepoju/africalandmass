import axios from "axios";
//import jwtDecode from "jwt-decode";
import { USER_KEY, USER_SESSION_EXPIRED, SUCCESS_RESPONSE } from "../_constants";
//import notify from '../_utils/notify';

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
    // console.log(config);
    return axios
      .get(url, config)
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        return err
      });
  },
  getMultipleRequests: function (firstUrl, secondUrl, thirdUrl, fourthUrl, fifthUrl, sixthUrl, header) {
    let reqHeader = header
      ? header
      : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };
    // console.log(config);

    return axios.all([
      axios.get(firstUrl, config).catch((error) => error),
      axios.get(secondUrl, config).catch((error) => error),
      axios.get(thirdUrl, config).catch((error) => error),
      axios.get(fourthUrl, config).catch((error) => error),
      axios.get(fifthUrl, config).catch((error) => error),
      axios.get(sixthUrl, config).catch((error) => error)
    ]).then(
      axios.spread(function (firstRes, secondRes, thirdRes, fourthRes, fifthRes, sixthRes) {
        return {
          firstRes,
          secondRes,
          thirdRes,
          fourthRes,
          fifthRes,
          sixthRes
        }
      })
    ).catch(function (error) {
      return error
    })

  },
  postMixedRequests: function (firstUrl, secondUrl, payload, formData, header) {
    let reqHeader = header
      ? header
      : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };
    // console.log(config);

    return axios.all([
      axios.post(firstUrl, payload, config),
      axios.post(secondUrl, formData, config)
    ]).then(
      axios.spread(function (firstRes, secondRes) {
        return {
          firstRes,
          secondRes
        }
      })
    ).catch(function (error) {
      console.log(error)
    })
  },
  formatBasicDropdown: (response) => {
    let data = JSON.parse(JSON.stringify(response.response))
    const options = data.map(({ id, name }) => ({ value: id, label: name }))
    return options
  },
  formatInstitutionDropdown: (response) => {
    let data = JSON.parse(JSON.stringify(response.response))
    const options = data.map(({ id, institutionName }) => ({ value: id, label: institutionName }))
    return{ options: options, length: data.length  }
  },
  formatDataSourceDropdown: (response) => {
    let data = JSON.parse(JSON.stringify(response.response))
    const options = data.map(({ id, baseUrl }) => ({ value: id, label: baseUrl }))
    return options
  },
  formatTableGridData: (res, size) => {
    if (res.response.status === 200) {
      let totalCount = res.response.headers.totalcount
      return { data: res.response.data, totalPages: appHelpers.getTotalPageCount(totalCount, size), error: false }
    } else {
      return { data: [], totalPages: 0, error: appHelpers.interpretErrorResponse(res.response)}
    }
  },
  getUserFullName: () => {
    let user = JSON.parse(localStorage.getItem(USER_KEY))
    if (user) {
      return user.authInfo.fullName
    }
  },
  getUrlParams: (name, url) => {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && match[1];
  },
  setSessionExpired: function () {
    localStorage.setItem(USER_SESSION_EXPIRED, 'true');
  },
  getSessionExpired: function () {
    return localStorage.getItem(USER_SESSION_EXPIRED);
  },
  destroySessionExpired: function () {
    let __session__ = localStorage.getItem(USER_SESSION_EXPIRED);
    if (__session__) localStorage.removeItem(USER_SESSION_EXPIRED);
  },
  destroySession: function () {
    let __usr__ = localStorage.getItem(USER_KEY);
    if (__usr__) localStorage.removeItem(USER_KEY);
    //notify.toastError("You are now logged out");
  },

  // getExpiryTime: function () {
  //   const token = JSON.parse(localStorage.getItem(USER_KEY)) &&
  //     JSON.parse(localStorage.getItem(USER_KEY))["access_token"];
  //   if (token) {
  //     return jwtDecode(token).exp
  //   }
  //   return
  // },

  getUserId: function () {
    let __usr__ = JSON.parse(localStorage.getItem(USER_KEY));
    console.log(__usr__)
    if (__usr__) {
      return __usr__.authInfo.id
    }
  },
  getSSOUserId: function () {
    let __usr__ = JSON.parse(localStorage.getItem(USER_KEY));
    console.log(__usr__)
    if (__usr__) {
      return __usr__.authInfo.ssoUserId
    }
  },

  getUserPermissions: function () {
    let user = JSON.parse(localStorage.getItem(USER_KEY))
    if (user){
      return user.authInfo.authRole.authPermissions
    } else {
      return []
    }
  },

  checkIfUserHasPermission: function (permissionArray, Singlepermission) {
    let permissionExists = permissionArray.find(permission => {
      return permission.id === `${Singlepermission}`
    })
    if(permissionExists){
      return true
    }
      return false;
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

  numberWithCommasOnly: x => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  },

  commas: x => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  removeArrayItem: (array, item) => {
    return array.filter(e => e !== item)
  },
  getTotalPageCount: (totalCount, pageSize) => {
    let totalPageCount = Math.ceil(Number(totalCount)/pageSize);
    if (totalPageCount >= 100 ){
      return 100;
    }
    return totalPageCount
  },

  // formatId: (id) => {
  //   return id != null && id.length > 0 && id.length <= 6 ?

  //   id.length == 6 ? 

  //   id = id.substr(0,2) + "-"+ id.substr(2,2) + "-" + id.substr(4) :

  //   id.length == 4 ? 

  //   id = id.substr(0,2) + "-" + id.substr(2)  : id 
  // },

  //Format Mode of play ID
  // function formatId(id){
  //   if((id != null) && (id.length > 0) && (id.length <= 6)){
  //     if (id.length == 6){
  //       id = id.substr(0,2) + "-"+ id.substr(2,2) + "-" + id.substr(4) 
  //     }
  //     else if (id.length == 4){
  //       id = id.substr(0,2) + "-" + id.substr(2)
  //     }
  //     else{
  //       return id;
  //     }
  //   }
  //   return id;
  // },

  formatMoney: (amount) => {
    //if (Number(amount) === NaN) return '0';
    // twelve zeroes for trillion
    return Math.abs(Number(amount)) >= 1.0e+12

      ? (Math.abs(Number(amount)) / 1.0e+12).toFixed(2) + "T"
      // nine Zeroes forbillions
      : Math.abs(Number(amount)) >= 1.0e+9


        ? (Math.abs(Number(amount)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(amount)) >= 1.0e+6

          ? (Math.abs(Number(amount)) / 1.0e+6).toFixed(2) + "M"
          // Three Zeroes for Thousands
          : Math.abs(Number(amount)) >= 1.0e+3

            ? (Math.abs(Number(amount)) / 1.0e+3).toFixed(2) + "K"

            : Math.abs(Number(amount))

            ? amount : "0";
            
  },

  formatLabel: (amount) => {
    // twelve zeroes for trillion
    return Math.abs(Number(amount)) >= 1.0e+12

      ? (Math.abs(Number(amount)) / 1.0e+12).toFixed(1) + "T"
      // nine Zeroes forbillions
      : Math.abs(Number(amount)) >= 1.0e+9


        ? (Math.abs(Number(amount)) / 1.0e+9).toFixed(1) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(amount)) >= 1.0e+6

          ? (Math.abs(Number(amount)) / 1.0e+6).toFixed(1) + "M"
          // Three Zeroes for Thousands
          : Math.abs(Number(amount)) >= 1.0e+3

            ? (Math.abs(Number(amount)) / 1.0e+3).toFixed(0) + "K"

            : Math.abs(Number(amount));
  },

  getDashboardResponse(response, data) {
    if(response.status === 200){
      return data;
    }
    if (response.status === 200 && Object.keys(data).length < 1) {
      return [];
    }
    if (response.status === undefined) {
     return [];
    }
  },

    getDashboardError(response, data) {
      if((response.response&&response.response.status === 404) || ( (response.response&&response.response.status === 404)&& Array.isArray(data) && data.length === 0) || ( (typeof data === "object" && data !== null) && Object.keys(data).length === 0)){
        return {
          recordError: true,
          networkError: false
        }
      }
      if(response.status === 200){
        return {
          recordError: false,
          networkError: false
        }
      }
      if (response.status === 200 && Object.keys(data).length < 1) {
        return {
          recordError: true,
          networkError: false
        }
      } 
      if (response.status === undefined) {
        return {
          recordError: false,
          networkError: true
        }
      }
      if(response.status === undefined && response.indexOf(404) !== -1){
        return {
          recordError: true,
          networkError: false
        }
      }
       else { return false }

    
  },
}