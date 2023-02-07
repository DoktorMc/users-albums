import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(
  rootReducers,
  applyMiddleware(thunk, logger)
);

export default store;
