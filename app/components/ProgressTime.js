import React, { Component } from 'react';

class ProgressTime extends React.PureComponent {
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


    return (
      <div className="progress-time">
        <div>{`${elapsedTime}/${totalTime}`}</div>
      </div>
    )
  }

}

const types = React.PropTypes;
ProgressTime.PropTypes = {
  duration: types.number.isRequired,
  position: types.number.isRequired,
}

export default ProgressTime

















