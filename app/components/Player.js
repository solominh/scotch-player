import React, { Component } from 'react';
import ClassNames from 'classnames';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Render Player');
    const isPlaying = this.props.playStatus === 'PLAYING';
    const playPauseClassName = ClassNames({
      'fa fa-play': !isPlaying,
      'fa fa-pause': isPlaying,
    });

    return (
      <div className="player">
        <div className="player__backward">
          <button onClick={this.props.moveBackward}><i className="fa fa-backward"></i></button>
        </div>
        <div className="player__main">
          <button onClick={this.props.togglePlay}><i className={playPauseClassName}></i></button>
          <button onClick={this.props.stop}><i className="fa fa-stop"></i></button>
          <button onClick={this.props.playRandom}><i className="fa fa-random"></i></button>
        </div>
        <div className="player__forward">
          <button onClick={this.props.moveForward}><i className="fa fa-forward"></i></button>
        </div>
      </div>
    )
  }

}

export default Player
