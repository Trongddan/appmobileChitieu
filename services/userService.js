import { getRequest, postRequest } from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";
import { storage } from "../storage/storage";

const getId = async()=>{
  const user = await storage.getUserID();
  if(user!=null){
    return user.userId
  }
}

export const LoginRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.login, params, successCallback, errorCallBack);
};
export const RegisterRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.register, params, successCallback, errorCallBack);
};
export const getUserById = (params, successCallback, errorCallBack) => {
  getRequest(apiRouter.getUserById+getId(), params, successCallback, errorCallBack);
};
