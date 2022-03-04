import * as actionTypes from "../types/types";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: "",
  response: "",
  flowerData: null,
  isLoading: false,
  userData: null,
  userDetails: null,
};

//reducer

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        response: payload,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.err,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        response: payload.response,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: payload.err,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case actionTypes.CLEAR_RESPONSE:
      return {
        ...state,
        response: "",
      };

    case actionTypes.SHOW_FLOWER_DATA:
      return {
        ...state,
        flowerData: payload,
        isLoading: false,
      };
    case actionTypes.FLOWER_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case actionTypes.FLOWER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_ALL_USER:
      return {
        ...state,
        userData: payload,
        isLoading: false,
      };
    case actionTypes.GET_ALL_USER_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case actionTypes.GET_USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
        isLoading: false,
      };
    case actionTypes.GET_USER_DETAILS_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case actionTypes.GET_USER_DETAILS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
