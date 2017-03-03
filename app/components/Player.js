import React, { Component } from 'react';
import ClassNames from 'classnames';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isPlaying = this.props.playStatus === 'PLAYING';
    const playPauseClassName = ClassNames({
      'fa fa-play': !isPlaying,
      'fa fa-pause': isPlaying,
    });

    return (
      <div className="player">
        <button onClick={this.props.random}><i className="fa fa-random"></i></button>
        <button onClick={this.props.stepBackward}><i className="fa fa-step-backward"></i></button>
        <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
        <button onClick={this.props.togglePlay}><i className={playPauseClassName}></i></button>
        <button onClick={this.props.forward}><i className="fa fa-forward"></i></button>
        <button onClick={this.props.stepForward}><i className="fa fa-step-forward"></i></button>
        <button onClick={this.props.repeat}><i className="fa fa-repeat"></i></button>
      </div>
    )
  }

}

export default Player
