


import * as types from '../constants/ActionTypes';

const initialState = {
  tracks: [],
  selectedTrack: null,
  playStatus: 'STOPPED',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_SONG: {
      const { tracks, selectedTrack } = action;
      return {
        tracks,
        selectedTrack,
        playStatus: 'PLAYING',
      }
    }

    case types.RANDOM: {
      const {tracks} = state;
      if (tracks.length <= 0) return state;

      const randomNumber = Math.floor((Math.random() * tracks.length));
      return {
        ...state,
        selectedTrack: state.tracks[randomNumber],
        playStatus: 'PLAYING',
      }
    }

    case types.STEP_BACKWARD: {
      const {tracks} = state;
      if (tracks.length <= 0) return state;

      const randomNumber = Math.floor((Math.random() * tracks.length));
      return {
        ...state,
        selectedTrack: state.tracks[randomNumber],
        playStatus: 'PLAYING',
      }
    }

    case types.STEP_FORWARD: {
      const {tracks} = state;
      if (tracks.length <= 0) return state;

      const randomNumber = Math.floor((Math.random() * tracks.length));
      return {
        ...state,
        selectedTrack: state.tracks[randomNumber],
        playStatus: 'PLAYING',
      }
    }

    case types.TOGGLE_PLAY: {
      return {
        ...state,
        playStatus: state.playStatus === 'PLAYING' ? 'PAUSED' : 'PLAYING',
      }
    }

    case types.ON_FINISHED_PLAYING: {
      return {
        ...state,
        playStatus: 'STOPPED',
      }
    }

    default:
      return state;
  }
}
