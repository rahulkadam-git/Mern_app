import * as actionTypes from "../types/location.types";

const initialState = {
  locations: null,
  newGate:null,
};

//reducer

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_LOCATION_SUCCESS:
      return {
        ...state,
        locations: payload,
      };
    case actionTypes.ADD_LOCATION_FAILED:
      return {
        ...state,
        error: payload.err,
      };
      case actionTypes.ADD_GATE_SUCCESS:
        return {
          ...state,
          newGate: payload,
        };
      case actionTypes.ADD_GATE_FAILED:
        return {
          ...state,
          error: payload.err,
        };
    default:
      return state;
  }
}
