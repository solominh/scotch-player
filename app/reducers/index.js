import { combineReducers } from 'redux';
import tracks from './tracks';
import selectedTrack from './selectedTrack';
import playStatus from './playStatus';

import * as types from '../constants/ActionTypes';


export default function (state = {}, action) {

  return {
    tracks: tracks(state.tracks, action),
    selectedTrack: selectedTrack(state, action), // Pass store 
    playStatus: playStatus(state.playStatus, action),
  }
}







