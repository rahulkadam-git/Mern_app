import api from "./api";

//register request
const registerApi = async (newUser) => {
  return await api.post("/auth/register", newUser);
};

//login request
const loginApi = async (userCredential) => {
  return await api.post(`/auth/login`, userCredential);
};

//get flower data
const getFlowerData = async (date) => {
  return await api.get(`/detection/flower/${date}`);
};

const getAllUSerData = async () => {
  return await api.get(`/user/all`);
};
const getUserDetailsApi = async (_id) => {
  return await api.post(`/user/${_id}`);
};

//logout
const logoutApi = () => {
  localStorage.removeItem("user");
  return { msg: "Logout Successfully", user: {} };
};

export {
  registerApi,
  loginApi,
  logoutApi,
  getFlowerData,
  getAllUSerData,
  getUserDetailsApi,
};
