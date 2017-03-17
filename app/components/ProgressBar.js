import React, { Component, PropTypes } from 'react';

class ProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let playPosition = (this.props.position / this.props.duration) || 0;
    playPosition *= 100;

    const playStyle = {
      width: `${playPosition}%`,
    }

    return (
      <div className="progress progress-bar-container">
        <div className="progress-bar progress-bar-player"
          role="progressbar"
          aria-valuenow={playPosition}
          aria-valuemin="0"
          aria-valuemax="100"
          style={playStyle}>
          <span className="sr-only">{playStyle.width} Playing complete</span>
        </div>
      </div>
    )
  }
}

ProgressBar.PropTypes = {
  duration: PropTypes.number,
  position: PropTypes.number,
}

export default ProgressBar
