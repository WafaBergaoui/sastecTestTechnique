import Axios from "axios";
import {
  VIDEO_LIST_FAIL,
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
} from "../constants/videoConstants";

export const listVideos =
  ({ urlLecture = "", title = "", duration = "" }) =>
  async (dispatch) => {
    dispatch({
      type: VIDEO_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `./data/videos.json?title=${title}&duration=${duration}`
      );
      dispatch({ type: VIDEO_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VIDEO_LIST_FAIL, payload: error.message });
    }
  };
