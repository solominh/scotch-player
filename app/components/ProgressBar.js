import React, { Component, PropTypes } from 'react';

class ProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let position = (this.props.position / this.props.duration) || 0;
    position *= 100;

    const style = {
      width: `${position}%`,
    }

    return (
      <div className="progress progress-bar-music">
        <div className="progress-bar progress-bar-custom"
          role="progressbar"
          aria-valuenow={position}
          aria-valuemin="0"
          aria-valuemax="100"
          style={style}>
          <span className="sr-only">{style.width} Complete</span>
        </div>
      </div>
    )
  }
}

ProgressBar.PropTypes = {
  duration: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
}

export default ProgressBar
