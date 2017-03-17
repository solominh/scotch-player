
import * as types from '../constants/ActionTypes';


export default function (state = [], action) {
  switch (action.type) {
    case types.SEARCH: {
      if (action.payload.data) {
        return action.payload.data;
      }else{
        return state;
      }
    }

    default:
      return state;
  }
}
