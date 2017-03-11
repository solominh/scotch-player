import React, { Component } from 'react';
import ClassNames from 'classnames';

class PlayerButtons extends React.PureComponent {
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
      <div className="player-buttons">
        <button className="player-btn" onClick={this.props.random}><i className="fa fa-random"></i></button>
        <button className="player-btn" onClick={this.props.stepBackward}><i className="fa fa-step-backward"></i></button>
        <button className="player-btn" onClick={this.props.backward}><i className="fa fa-backward"></i></button>
        <button className="player-btn" onClick={this.props.togglePlay}><i className={playPauseClassName}></i></button>
        <button className="player-btn" onClick={this.props.forward}><i className="fa fa-forward"></i></button>
        <button className="player-btn" onClick={this.props.stepForward}><i className="fa fa-step-forward"></i></button>
        <button className="player-btn" onClick={this.props.loop}><i className="fa fa-repeat"></i></button>
      </div>
    )
  }

}

const types = React.PropTypes;
PlayerButtons.propTypes = {
  playStatus: types.string,
  random: types.func,
  loop: types.func,
  backward: types.func,
  forward: types.func,
  stepBackward: types.func,
  stepForward: types.func,
  togglePlay: types.func,
}

export default PlayerButtons
