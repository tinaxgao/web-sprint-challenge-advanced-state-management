import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

export const ERROR_VALUE = "ERROR_VALUE";
export const errorValue = (err) => {
  return { type: ERROR_VALUE, payload: err };
};

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        console.log("fetch smurfs resp", resp.data);
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
