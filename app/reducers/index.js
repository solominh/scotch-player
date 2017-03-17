import { combineReducers } from 'redux';
import searchedTracks from './searchedTracks';
import playerData from './playerData';

import * as types from '../constants/ActionTypes';


export default function (state = {}, action) {
  return {
    searchedTracks: searchedTracks(state.searchedTracks, action),
    playerData: playerData(state.playerData, action),
  }
}







