import React, { Component, PropTypes } from 'react';
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
        <button className="player-btn" onClick={this.props.loop}><i className="fa fa-refresh"></i></button>
      </div>
    )
  }

}

PlayerButtons.propTypes = {
  playStatus: PropTypes.string,
  random: PropTypes.func,
  loop: PropTypes.func,
  backward: PropTypes.func,
  forward: PropTypes.func,
  stepBackward: PropTypes.func,
  stepForward: PropTypes.func,
  togglePlay: PropTypes.func,
}

export default PlayerButtons
