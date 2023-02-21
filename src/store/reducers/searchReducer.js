import { ACTION_SEARCH_CONTACT } from "../actions/searchAction";


const initialState = '';

const searchReducer = (state = initialState, { type, payload }) => {
  if (type === ACTION_SEARCH_CONTACT) {
    return payload;
  }
    return state;
};

export default searchReducer;
