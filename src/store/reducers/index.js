
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import albumsReducer from './albumsReducer';

const rootReducers = combineReducers({
  users: userReducer,
  albums: albumsReducer
});

export default rootReducers;
