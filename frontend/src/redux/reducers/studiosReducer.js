import {
  GET_STUDIOS,
  GET_STUDIO_BY_ID,
  ADD_STUDIO,
  DELETE_STUDIO,
  UPDATE_STUDIO,
  STUDIOS_LOADING,
} from "../actions/types";

const initialState = {
  studios: [],
  studio: [],
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
    case GET_STUDIO_BY_ID:
      return {
        ...state,
        studio: action.payload,
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
          studio.id === action.payload.data._id ? action.payload.data : studio
        ),
      };
    case DELETE_STUDIO:
      return {
        ...state,
        studios: state.studios.filter((studio) => studio.id !== action.payload),
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
