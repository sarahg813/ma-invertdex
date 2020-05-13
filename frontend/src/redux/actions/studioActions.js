import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  GET_STUDIOS,
  GET_STUDIO_BY_ID,
  ADD_STUDIO,
  DELETE_STUDIO,
  STUDIOS_LOADING,
  UPDATE_STUDIO,
} from "./types";

export const getStudios = () => (dispatch) => {
  dispatch(setStudiosLoading());

  axios
    .get("/api/studios")
    .then((res) =>
      dispatch({
        type: GET_STUDIOS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getStudioById = (id) => (dispatch) => {
  axios.get(`/api/studios/profile/${id}`).then((res) =>
    dispatch({
      type: GET_STUDIO_BY_ID,
      payload: res.data,
    })
  );
};

export const addStudio = (studio) => (dispatch) => {
  axios
    .post("/api/studios/add", studio)
    .then((res) =>
      dispatch({
        type: ADD_STUDIO,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteStudio = (id) => (dispatch) => {
  axios
    .delete(`/api/studios/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_STUDIO,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateStudio = (id) => (dispatch) => {
  axios
    .put(`/api/studios/update/${id}`)
    .then((res) =>
      dispatch({
        type: UPDATE_STUDIO,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setStudiosLoading = () => {
  return {
    type: STUDIOS_LOADING,
  };
};
