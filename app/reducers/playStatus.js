
import * as types from '../constants/ActionTypes';


export default function (state = 'STOPPED', action) {
  switch (action.type) {
    case types.SELECT_SONG: {
      return 'PLAYING';
    }
    case types.RANDOM:{
      return 'PLAYING';
    }
    case types.STEP_BACKWARD:{
      return 'PLAYING';
    }
    case types.STEP_FORWARD:{
      return 'PLAYING';
    }
    case types.TOGGLE_PLAY: {
      return state === 'PLAYING' ? 'PAUSED' : 'PLAYING';
    }
    case types.ON_FINISHED_PLAYING:{
      return 'STOPPED';
    }

  }
  return state;
}
