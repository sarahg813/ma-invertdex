import {
  GET_STUDIOS,
  ADD_STUDIO,
  DELETE_STUDIO,
  UPDATE_STUDIO,
  STUDIOS_LOADING,
  SEARCH_STUDIOS,
} from "../actions/types";

const initialState = {
  studios: [],
  results: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDIOS:
      return {
        ...state,
        studios: action.payload,
        isLoading: false,
      };
    case ADD_STUDIO:
      return {
        ...state,
        studios: [...state.studios, action.payload],
      };
    case UPDATE_STUDIO:
      return {
        ...state,
        studios: state.studios.map((studio) =>
          studio._id === action.payload._id ? action.payload : studio
        ),
      };
    case DELETE_STUDIO:
      return {
        ...state,
        studios: state.studios.filter(
          (studio) => studio._id !== action.payload
        ),
      };
    case SEARCH_STUDIOS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    case STUDIOS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
