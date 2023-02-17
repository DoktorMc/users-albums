import { ACTION_GET_ALBUMS, ACTION_GET_ALBUMS_BY_ID, ACTION_GET_ALBUM_DETAILS } from "../actions/albumActions";

const initialState = {
  albums: [],
  userAlbums:[],
  photos: [],
};

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_GET_ALBUMS:
      return {
        ...state, albums: payload
      }
    
    case ACTION_GET_ALBUM_DETAILS:
      return {
        ...state, photos:payload
      }
    
    case ACTION_GET_ALBUMS_BY_ID:
      return {
        ...state, userAlbums:payload
      }
    
  
    default:
      return state;
  }
}

export default albumsReducer;