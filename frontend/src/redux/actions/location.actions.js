import * as actionTypes from "../types/location.types";
import { locationApi, gateApi } from "../../API/location.api";

export const locationAction = (newLocation) => async (dispatch) => {
  try {
    const locationCreated = await locationApi(newLocation);
    console.log(locationCreated.data)
    dispatch({
      type: actionTypes.ADD_LOCATION_SUCCESS,
      payload: locationCreated.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_LOCATION_FAILED,
      payload: { err: error.response.data || "Registration Failed" },
    });
  }
};

export const gateAction = (gateDetails) => async (dispatch) => {
  try {
    const gateCreated = await gateApi(gateDetails);
    dispatch({
      type: actionTypes.ADD_GATE_SUCCESS,
      payload: gateCreated.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_GATE_FAILED,
      payload: { err: error.response.data || "Registration Failed" },
    });
  }
};
