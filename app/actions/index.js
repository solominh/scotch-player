import axio from 'axios';

import * as types from '../constants/ActionTypes';
import { SOUNDCLOUD_CLIENT_ID as CLIENT_ID } from '../constants/APIKeys';
const BASE_URL = `https://api.soundcloud.com/tracks?client_id=${CLIENT_ID}`;

export * from './playerActions';


export function search(term) {
  const url = `${BASE_URL}&q=${term}`;
  const request = axio.get(url);
  return {
    type: types.SEARCH,
    payload: request,
  }
}

export function selectSong(tracks, selectedTrack) {
  return {
    type: types.SELECT_SONG,
    tracks,
    selectedTrack,
  }
}

export function onPlaying(audio) {
  return {
    type: types.ON_PLAYING,
    audio,
  }
}

export function onFinishedPlaying(audio) {
  return {
    type: types.ON_FINISHED_PLAYING,
    audio,
  }
}


