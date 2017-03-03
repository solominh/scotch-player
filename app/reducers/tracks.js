
import * as types from '../constants/ActionTypes';


export default function (state = [], action) {
  switch (action.type) {
    case types.SEARCH:
      return action.payload.data;

  }
  return state;
}
