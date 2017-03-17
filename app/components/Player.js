import React, { Component } from 'react';
import axio from 'axios';


import PlayerButtons from '../containers/PlayerButtons';
import Sound from '../components/Sound';
import ProgressBar from '../components/ProgressBar';
import ProgressTime from '../components/ProgressTime';


class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playFromPosition: 0,
      trackProgress: {
        duration: 0,
        position: 0,
      },
    }
  }

  backward = () => {
    this.setState((prevState, props) => {
      const { duration, position } = prevState.trackProgress;
      const { playFromPosition } = prevState;
      let backwardPosition = position - 1000 * 10;
      if (backwardPosition < 0) backwardPosition = 0;
      if (backwardPosition === playFromPosition) backwardPosition -= 1;
      return { playFromPosition: backwardPosition }
    })

    if (this.props.backward) this.props.backward()
  }

  forward = () => {
    this.setState((prevState, props) => {
      let { duration, position } = prevState.trackProgress;
      let forwardPosition = position + 1000 * 10;
      if (forwardPosition > duration) forwardPosition = duration;
      return { playFromPosition: forwardPosition }
    })

    if (this.props.forward) this.props.forward()
  }

  onPlaying = (audio) => {
    this.setState((prevState, props) => {
      const { duration, position } = audio;
      return {
        trackProgress: {
          duration,
          position,
        }
      }
    })
  }

  onFinishedPlaying = (audio) => {
    if (this.props.onFinishedPlaying) this.props.onFinishedPlaying()
  }

  render() {
    if (!this.props.selectedTrack) {
      return null;
    }

    return (
      <div className="player">
        <Sound
          track={this.props.selectedTrack}
          playStatus={this.props.playStatus}
          playFromPosition={this.state.playFromPosition}
          onPlaying={this.onPlaying}
          onFinishedPlaying={this.onFinishedPlaying}
        />
        <ProgressBar
          {...this.state.trackProgress}
        />

        <div className="row-bottom">
          <PlayerButtons
            playStatus={this.props.playStatus}
            backward={this.backward}
            forward={this.forward}
          />
          <ProgressTime
            {...this.state.trackProgress}
          />
        </div>

      </div>
    );
  }
}


const types = React.PropTypes;
Player.propTypes = {
  tracks: types.arrayOf(types.object),
  selectedTrack: types.object,
  playStatus: types.string,
  backward: types.func,
  forward: types.func,
}

export default Player;
