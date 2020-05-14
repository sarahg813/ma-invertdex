import axios from "axios";
import { returnErrors } from "./errorActions";
import { GET_STUDIO_BY_ID, STUDIO_LOADING, STUDIO_UNLOAD } from "./types";

export const getStudioById = (id) => (dispatch) => {
  dispatch(setStudioLoading());

  axios
    .get(`/api/studios/profile/${id}`)
    .then((res) =>
      dispatch({
        type: GET_STUDIO_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) => {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }
    });
};

export const setStudioLoading = () => {
  return {
    type: STUDIO_LOADING,
  };
};

export const setStudioUnload = () => {
  return {
    type: STUDIO_UNLOAD,
  };
};
