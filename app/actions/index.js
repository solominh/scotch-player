import axio from 'axios';

import * as types from '../constants/ActionTypes';
import { SOUNDCLOUD_CLIENT_ID as CLIENT_ID } from '../constants/APIKeys';
const BASE_URL = `https://api.soundcloud.com/tracks?client_id=${CLIENT_ID}`;


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

export function moveBackward() {
  return {
    type: types.MOVE_BACKWARD,
  }
}

export function moveForward() {
  return {
    type: types.MOVE_FORWARD,
  }
}

export function togglePlay() {
  return {
    type: types.TOGGLE_PLAY,
  }
}

export function stop() {
  return {
    type: types.STOP,

  }
}

export function playRandom() {
  return {
    type: types.PLAY_RANDOM,
  }
}
