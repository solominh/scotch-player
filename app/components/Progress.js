import React, { Component } from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
  }

  formatMilliseconds(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
      (seconds < 10 ? '0' : '') + seconds;
  }


  render() {
    const totalTime = this.formatMilliseconds(this.props.duration);
    const elapsedTime = this.formatMilliseconds(this.props.position);
    let position = (this.props.position / this.props.duration) || 0;
    position *= 100;

    const style = {
      width: `${position}%`,
    }

    return (
      <div>
        <div className="text-center">{`${elapsedTime}/${totalTime}`}</div>
        <div className="progress music-progress-bar-wrapper">
          <div className="progress-bar music-progress-bar"
            role="progressbar"
            aria-valuenow={position}
            aria-valuemin="0"
            aria-valuemax="100"
            style={style}>
            <span className="sr-only">{style.width} Complete</span>
          </div>
        </div>
      </div>
    )
  }

}

export default Progress
