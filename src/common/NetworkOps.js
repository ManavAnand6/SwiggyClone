import axios from "axios";

const TAG = "NetworkOps: ";
const API_TIMEOUT = 18000;

axios.interceptors.request.use(
  function (config) {
    let newConfig = config;
    try {
      newConfig = {
        ...newConfig,
        timeout: API_TIMEOUT,
      };
    } catch (e) {
      console.log(TAG, "16 Error in interceptor request", e);
    }
    return newConfig;
  },
  function (error) {
    console.log(TAG, "21 Error in interceptor request", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    try {
      console.log('response ===>', response);
      const { data } = response;
      const { status, message, errorCode } = data;
      if (status !== 200) {
        console.log(TAG, `${errorCode} - ${message} - ${response.config.url}`);
      }
      return data;
    } catch (e) {
      console.log(TAG, "error", e);
    }
    return {
      success: false,
      message: "NetworkOps: Something went wrong intercepting response",
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const makeGetRequest = (URL) => axios.get(URL);
export const makePostRequest = (URL, data = {}) => axios.post(URL, { ...data });
export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data });
export const makePatchRequest = (URL, data = {}) =>
  axios.patch(URL, { ...data });
export const makeDeleteRequest = (URL) => axios.delete(URL);
