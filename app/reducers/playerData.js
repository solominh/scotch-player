


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
      const { tracks, selectedTrack } = state;
      if (tracks.length <= 0) return state;

      let randomNumber;
      while (true) {
        randomNumber = Math.floor((Math.random() * tracks.length));
        if (selectedTrack !== tracks[randomNumber]) break;
      }

      return {
        ...state,
        selectedTrack: tracks[randomNumber],
        playStatus: 'PLAYING',
      }
    }

    case types.STEP_BACKWARD: {
      const { tracks, selectedTrack } = state;
      if (tracks.length <= 0) return state;

      const selectedTrackIndex = tracks.findIndex(track => track.id === selectedTrack.id);
      if (selectedTrackIndex <= 0) return state;

      return {
        ...state,
        selectedTrack: tracks[selectedTrackIndex - 1],
        playStatus: 'PLAYING',
      }
    }

    case types.STEP_FORWARD: {
      const { tracks, selectedTrack } = state;
      if (tracks.length <= 0) return state;

      const selectedTrackIndex = tracks.findIndex(track => track.id === selectedTrack.id);
      if (selectedTrackIndex >= tracks.length - 1) return state;

      return {
        ...state,
        selectedTrack: tracks[selectedTrackIndex + 1],
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
