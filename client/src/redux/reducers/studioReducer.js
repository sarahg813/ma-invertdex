import {
  GET_STUDIO_BY_ID,
  STUDIO_LOADING,
  STUDIO_UNLOAD,
} from "../actions/types";

const initialState = {
  studio: [],
  isLoaded: false,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDIO_BY_ID:
      return {
        ...state,
        studio: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    case STUDIO_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STUDIO_UNLOAD:
      return {
        ...state,
        isLoaded: false,
        studio: [],
      };

    default:
      return state;
  }
}
