import * as types from '../constants/ActionTypes';

export function backward() {
  return {
    type: types.BACKWARD,
  }
}

export function forward() {
  return {
    type: types.FORWARD,
  }
}

export function togglePlay() {
  return {
    type: types.TOGGLE_PLAY,
  }
}

export function stepBackward() {
  return {
    type: types.STEP_BACKWARD,
  }
}

export function stepForward() {
  return {
    type: types.STEP_FORWARD,
  }
}

export function random() {
  return {
    type: types.RANDOM,
  }
}

export function loop() {
  return {
    type: types.LOOP,
  }
}
