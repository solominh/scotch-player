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

export function selectSong(track) {
  return {
    type: types.SELECT_SONG,
    track: track,
  }
}

export function onSongPlaying(audio) {
  return {
    type: types.ON_SONG_PLAYING,
    audio,
  }
}

export function onSongFinish(audio) {
  return {
    type: types.ON_SONG_FINISH,
    audio,
  }
}


