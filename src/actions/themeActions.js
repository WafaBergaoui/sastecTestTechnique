import Axios from "axios";
import {
  GET_ALL_THEMES_REQUEST,
  GET_ALL_THEMES_SUCCESS,
  GET_ALL_THEMES_FAILURE,
} from "../constants/themeConstants";

const getAllThemes = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_THEMES_REQUEST });
    const res = await Axios.get('./data/themes.json');
    console.log(res);
    if (res.status === 200) {
      const { themeList } = res.data;
      dispatch({
        type: GET_ALL_THEMES_SUCCESS,
        payload: { themes: themeList },
      });
    } else {
      dispatch({
        type: GET_ALL_THEMES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getAllThemes };
