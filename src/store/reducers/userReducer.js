import {
  ACTION_ADD_USER,
  ACTION_DELETE_USER,
  ACTION_GET_USERS,
  ACTION_GET_USER_DETAILS,
} from "../actions/userActions";

const initialState = {
  users: [],
  userDetail: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_GET_USERS:
      return { ...state, users: payload };

    case ACTION_DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };

    case ACTION_GET_USER_DETAILS:
      return { ...state, userDetail: payload };

    case ACTION_ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };

    default:
      return state;
  }
};

export default userReducer;
