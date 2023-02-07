import { ACTION_DELETE_USER, ACTION_SET_USERS } from "../actions/userActions";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_USERS:
      return { users: payload };

    case ACTION_DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };

    default:
      return state;
  }
};

export default userReducer;
