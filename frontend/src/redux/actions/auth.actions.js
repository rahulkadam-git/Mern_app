import * as actionTypes from "../types/types";
import jwt_decode from "jwt-decode";
import {
  registerApi,
  loginApi,
  logoutApi,
  getFlowerData,
  getAllUSerData,
  getUserDetailsApi,
} from "../../API/auth.api";

//register action

export const registerAction = (newUser) => async (dispatch) => {
  try {
    const registerUserSuccesfully = await registerApi(newUser);

    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: registerUserSuccesfully.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      payload: { err: error.response.data || "Registration Failed" },
    });
  }
};

//login action

export const loginAction = (userCredential) => async (dispatch) => {
  try {
    const loginUserSuccesfully = await loginApi(userCredential);

    const { token } = loginUserSuccesfully.data;
    //console.log(token);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: { err: error.response.data || "Login Failed" },
    });
  }
};

export const loginSuccess = (data) => (dispatch) => {
  localStorage.setItem("user", data);
  const decode_token = jwt_decode(data);

  dispatch({
    type: actionTypes.LOGIN_SUCCESS,
    payload: decode_token,
  });
};

export const clearResponse = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_RESPONSE,
  });
};
export const clearError = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_ERROR,
  });
};

//logout action
export const logoutAction = () => (dispatch) => {
  const msg = logoutApi();
  dispatch({
    type: actionTypes.LOGOUT,
    payload: { msg },
  });
  return Promise.resolve(msg);
};

export const getFlowerDataActions = (date) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const getDataSuccessfully = await getFlowerData(date);

    dispatch({
      type: actionTypes.SHOW_FLOWER_DATA,
      payload: getDataSuccessfully.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FLOWER_ERROR,
      payload: { err: error.data || "data not found" },
    });
  }
};

export const getAllUsersActions = () => async (dispatch) => {
  dispatch(userdDataLoading(true));
  try {
    const getUserDataSuccessfully = await getAllUSerData();

    dispatch({
      type: actionTypes.GET_ALL_USER,
      payload: getUserDataSuccessfully.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_USER_FAILED,
      payload: { err: error.data || "data not found" },
    });
  }
};

export const getUserDetailsActions = (_id) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const getDataSuccessfully = await getUserDetailsApi(_id);

    dispatch({
      type: actionTypes.GET_USER_DETAILS,
      payload: getDataSuccessfully.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_DETAILS_ERROR,
      payload: { err: error.data || "data not found" },
    });
  }
};
export const userdDetailsLoading = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_USER_DETAILS_LOADING,
    payload: data,
  });
};

export const userdDataLoading = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_USER_DATA_LOADING,
    payload: data,
  });
};

export const dataLoading = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.FLOWER_DATA_LOADING,
    payload: data,
  });
};
