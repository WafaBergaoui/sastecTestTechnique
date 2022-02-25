import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import themeReducer from "../src/reducers/themeReducers";
import { videoListReducer } from "./reducers/videoReducers";

const initialState = {};
const reducer = combineReducers({
  theme: themeReducer,
  videoList: videoListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
