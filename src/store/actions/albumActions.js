import { type } from "@testing-library/user-event/dist/type";
import api from "../api";

export const ACTION_GET_ALBUMS = "ACTION_GET_ALBUMS";
export const ACTION_GET_ALBUM_DETAILS = "ACTION_GET_ALBUM_DETAILS";
// export const ACTION_GET_PHOTOS_BY_ALBUMS_ID = "ACTION_GET_PHOTOS_BY_ALBUMS_ID";

export const getAlbums = () => (dispatch) => {
  api.get("albums").then((resp) => {
    dispatch({
      type: ACTION_GET_ALBUMS,
      payload: resp.data,
    });
  });
};

export const getAlbumsDetails = (id) => (dispatch) => {
  api
    .get("photos", {
      params: {
        albumId: id,
      },
    })
    .then((resp) => {
      dispatch({
        type: ACTION_GET_ALBUM_DETAILS,
        payload: resp.data,
      });
    });
};
