import {
  GET_ALL_THEMES_REQUEST,
  GET_ALL_THEMES_SUCCESS,
  GET_ALL_THEMES_FAILURE,
} from "../constants/themeConstants";

const initState = {
  themes: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_THEMES_SUCCESS:
      state = {
        ...state,
        themes: action.payload.themes,
      };
      break;
  }
  return state;
};
