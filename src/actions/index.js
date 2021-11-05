import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

export const SET_ERROR = "SET_ERROR";
export const setError = (err) => {
  return { type: SET_ERROR, payload: err };
};

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        dispatch({ type: FETCH_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  };
};