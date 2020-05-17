import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  GET_STUDIOS,
  ADD_STUDIO,
  DELETE_STUDIO,
  STUDIOS_LOADING,
  UPDATE_STUDIO,
  SEARCH_STUDIOS,
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
    .catch((err) => {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }
    });
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
    .catch((err) => {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }
    });
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

export const updateStudio = (id, changes) => (dispatch) => {
  axios
    .patch(`/api/studios/update/${id}`, changes)
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

export const searchStudios = (searchQuery) => (dispatch) => {
  dispatch(setStudiosLoading());

  axios
    .get("/api/studios/search", {
      params: { q: searchQuery },
    })
    .then((res) =>
      dispatch({
        type: SEARCH_STUDIOS,
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
