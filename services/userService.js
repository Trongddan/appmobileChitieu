import { getRequest, postRequest,putRequest} from "../api/apiCaller";
import { apiRouter } from "../config/apiRouter";
import { storage } from "../storage/storage";
let userId=null;
const getId = async()=>{
  const user = await storage.getUserID();
  console.log("id nguoi dung",user);
  if(user!=null){
    userId=user
  }
}
getId()

export const LoginRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.login, params, successCallback, errorCallBack);
};
export const RegisterRequest = (params, successCallback, errorCallBack) => {
  postRequest(apiRouter.register, params, successCallback, errorCallBack);
};
export const getUserById = (params, successCallback, errorCallBack) => {
  getRequest(apiRouter.getUserById+ userId, params, successCallback, errorCallBack);
};
export const addCoin = (params, successCallback, errorCallBack) => {
  putRequest(apiRouter.addCoin + userId, params, successCallback, errorCallBack);
};
