import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';


const initialState = {
  playStatus: 'STOPPED',
  playFromPosition: 0,
  trackProgress: {
    duration: 0,
    position: 0,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_SONG: {
      return {
        ...state,
        playStatus: 'PLAYING',
      }
    }

    case types.BACKWARD: {
      const {duration, position} = state.trackProgress;
      const {playFromPosition} = state;
      let backwardPosition = position - 1000 * 10;
      if (backwardPosition < 0) backwardPosition = 0;
      if (backwardPosition === playFromPosition) backwardPosition -= 1;

      return {
        ...state,
        playFromPosition: backwardPosition,
      }
    }

    case types.FORWARD: {
      let {duration, position} = state.trackProgress;
      let forwardPosition = position + 1000 * 10;
      if (forwardPosition > duration) forwardPosition = duration;
      return {
        ...state,
        playFromPosition: forwardPosition,
      }
    }

    case types.TOGGLE_PLAY: {
      let {playStatus} = state;
      playStatus = playStatus !== 'PLAYING' ? 'PLAYING' : 'PAUSED';
      return {
        ...state,
        playStatus
      }
    }

    case types.ON_SONG_PLAYING: {
      const {duration, position} = action.audio;
      return {
        ...state,
        trackProgress: {
          duration,
          position,
        }
      }
    }

    case types.ON_SONG_FINISH: {
      return {
        ...state,
        playStatus: 'STOPPED',
      }
    }

    default:
      return state;
  }
}



