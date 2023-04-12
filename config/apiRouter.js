export const BaseUrl = "https://chi-tieu-app-server.herokuapp.com/";
export const apiRouter = {
  login: BaseUrl + "user/login",
  register: BaseUrl + "user/register",
  getUserById: BaseUrl + "user/getuser/",
  addCoin: BaseUrl + "user/add-coin/",
  updateCoin: BaseUrl + "user/update-coin/",
  // chi phi
  addExp: BaseUrl + "exp/add-exp",
  getAllExp: BaseUrl + "exp/all-exp",
};
