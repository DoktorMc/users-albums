
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import albumsReducer from './albumsReducer';
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({
  users: userReducer,
  albums: albumsReducer,
  search: searchReducer,
});

export default rootReducers;
