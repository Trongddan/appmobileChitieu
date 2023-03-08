import { postRequest } from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";

export const LoginRequest = (params, successCallback, errorCallBack) => {
  console.log(apiRouter.login);
  postRequest(apiRouter.login, params, successCallback, errorCallBack);
};
