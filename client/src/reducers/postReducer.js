import { FETCH_POSTS } from '../constants/postTypes';

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}