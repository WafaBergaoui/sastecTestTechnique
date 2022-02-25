const {
    VIDEO_LIST_REQUEST,
    VIDEO_LIST_SUCCESS,
    VIDEO_LIST_FAIL,
  } = require('../constants/videoConstants');
  
  export const videoListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case VIDEO_LIST_REQUEST:
        return { loading: true };
      case VIDEO_LIST_SUCCESS:
        return {
          loading: false,
          videos: action.payload.videos,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case VIDEO_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };