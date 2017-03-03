import { combineReducers } from 'redux';
import tracks from './tracks';
import selectedTrack from './selectedTrack';
import selectedTrackStatus from './selectedTrackStatus';
import * as types from '../constants/ActionTypes';


export default function (state = {}, action) {

  return {
    tracks: tracks(state.tracks, action),
    selectedTrack: selectedTrack(state, action), // Pass store 
    selectedTrackStatus: selectedTrackStatus(state.selectedTrackStatus, action),
  }
}


// export default combineReducers({
//   tracks,
//   selectedTrack,
//   selectedTrackStatus,
// })








