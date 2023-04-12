import { getRequest, postRequest, putRequest } from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";
import { storage } from "../storage/storage";

export const LoginRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.login, params, successCallback, errorCallBack);
};
export const RegisterRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.register, params, successCallback, errorCallBack);
};
export const getUserById = (params, successCallback, errorCallBack) => {
  getRequest(
    apiRouter.getUserById + params.id,
    params,
    successCallback,
    errorCallBack
  );
};
export const addCoin = (params, successCallback, errorCallBack) => {
  putRequest(
    apiRouter.addCoin + params.id,
    params,
    successCallback,
    errorCallBack
  );
};
export const updateCoin = (params, successCallback, errorCallBack) => {
  putRequest(
    apiRouter.updateCoin + params.id,
    params,
    successCallback,
    errorCallBack
  );
};