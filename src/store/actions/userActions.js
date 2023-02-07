import api from "../api";

export const ACTION_ADD_USER = "ACTION_ADD_USER";
export const ACTION_EDIT_USER = "ACTION_EDIT_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_SET_USERS = "ACTION_SET_USERS";

export const fetchUsers = () => (dispatch) => {
  api.get("users").then((resp) => {
    dispatch({
      type: ACTION_SET_USERS,
      payload: resp.data,
    })}
  );
};

export const deleteUser = (id) => (dispatch) => {
  api.delete(`users/${id}`)
  dispatch({
    type: ACTION_DELETE_USER,
    payload: id
  })
};
