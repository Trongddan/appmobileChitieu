import { postRequest } from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";

export const LoginRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.login, params, successCallback, errorCallBack);
};
export const RegisterRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.register, params, successCallback, errorCallBack);
};
