import { postRequest, getRequest } from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";

export const addExp = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.addExp, params, successCallback, errorCallBack);
};
export const getAllExp = (params, successCallback, errorCallBack) => {
  getRequest(apiRouter.getAllExp+params.userId, params, successCallback, errorCallBack);
};
