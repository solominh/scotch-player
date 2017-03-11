import React, { Component } from 'react';
import axio from 'axios';


import PlayerButtons from '../components/PlayerButtons';
import Sound from '../components/Sound';
import ProgressBar from '../components/ProgressBar';
import ProgressTime from '../components/ProgressTime';


class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playStatus: 'PLAYING',
      playFromPosition: 0,
      trackProgress: {
        duration: 0,
        position: 0,
      },
    }


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

  }

  random = () => {
    this.props.random();
  }

  loop = () => {

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
  }

  forward = () => {
    this.setState((prevState, props) => {
      let { duration, position } = prevState.trackProgress;
      let forwardPosition = position + 1000 * 10;
      if (forwardPosition > duration) forwardPosition = duration;
      return { playFromPosition: forwardPosition }
    })
  }

  stepBackward = () => {
    this.props.stepBackward()
  }

  stepForward = () => {
    this.props.stepForward();
  }

  togglePlay = () => {
    console.log(this)
    this.setState((prevState, props) => {
      const playStatus = prevState.playStatus === 'PLAYING' ? 'PAUSED' : 'PLAYING';
      return { playStatus }
    })
  }

  render() {
    if (!this.props.track) {
      return null;
    }

    return (
      <div className="player">
        <Sound
          track={this.props.track}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.playFromPosition}
          onPlaying={this.onPlaying}
          onFinishedPlaying={this.onFinishedPlaying}
        />
        <ProgressBar
          {...this.state.trackProgress}
        />

        <div className="row-bottom">
          <PlayerButtons
            playStatus={this.state.playStatus}
            random={this.random}
            loop={this.loop}
            backward={this.backward}
            forward={this.forward}
            stepBackward={this.stepBackward}
            stepForward={this.stepForward}
            togglePlay={this.togglePlay}
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
  track: types.object,
}

export default Player;
