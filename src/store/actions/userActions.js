import api from "../api";

export const ACTION_ADD_USER = "ACTION_ADD_USER";
export const ACTION_EDIT_USER = "ACTION_EDIT_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_GET_USERS = "ACTION_GET_USERS";
export const ACTION_GET_USER_DETAILS = "ACTION_GET_USER_DETAILS";

export const fetchUsers = () => (dispatch) => {
  api.get("users").then((resp) => {
    dispatch({
      type: ACTION_GET_USERS,
      payload: resp.data,
    });
  });
};

export const getUserDetails = (id) => (dispatch) => {
  api.get(`users/${id}`).then((resp) => {
    console.log('data details', resp.data);
    dispatch({
      type: ACTION_GET_USER_DETAILS,
      payload: resp.data,
    });
  });
};

export const deleteUser = (id) => (dispatch) => {
  api.delete(`users/${id}`);
  dispatch({
    type: ACTION_DELETE_USER,
    payload: id,
  });
};
