import * as types from '../constants/ActionTypes';

const initialState = null;

// Special: store instead of state
export default function (store, action) {
  const state = store.selectedTrack || initialState;

  switch (action.type) {
    case types.SELECT_SONG: {
      return action.track;
    }

    case types.RANDOM: {
      const trackLength = store.tracks.length;
      if (trackLength <= 0) return state;

      const randomNumber = Math.floor((Math.random() * trackLength));
      return store.tracks[randomNumber];
    }

    case types.STEP_BACKWARD: {
      const trackLength = store.tracks.length;
      if (trackLength <= 0) return state;

      const randomNumber = Math.floor((Math.random() * trackLength));
      return store.tracks[randomNumber];
    }

    case types.STEP_FORWARD: {
      const trackLength = store.tracks.length;
      if (trackLength <= 0) return state;

      const randomNumber = Math.floor((Math.random() * trackLength));
      return store.tracks[randomNumber];
    }

  }

  return state;

}

