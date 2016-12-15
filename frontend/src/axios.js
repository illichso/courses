import axios from "axios";

const setupAxiosInterceptors = () => {
  const onRequestSuccess = config => {
    config.timeout = 100000;
    return config;
  };
  const onResponseSuccess = (response) => response;
  const onResponseError = error => {
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export {
  setupAxiosInterceptors
};
