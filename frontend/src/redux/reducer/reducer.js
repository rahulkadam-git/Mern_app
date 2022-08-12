import * as actionTypes from "../types/types";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: "",
  response: "",
  location: null,
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
   
    default:
      return state;
  }
}
