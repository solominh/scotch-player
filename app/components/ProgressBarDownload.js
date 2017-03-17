import React, { Component, PropTypes } from 'react';

class ProgressBarDownload extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let downloadPosition = (this.props.bytesLoaded / this.props.bytesTotal) || 0;
    downloadPosition *= 100;
    console.log(downloadPosition)

    const downloadStyle = {
      width: `${downloadPosition}%`,
    }

    return (
      <div className="progress progress-bar-container">
        <div className="progress-bar progress-bar-download"
          role="progressbar"
          aria-valuenow={downloadPosition}
          aria-valuemin="0"
          aria-valuemax="100"
          style={downloadStyle}>
          <span className="sr-only">{downloadStyle.width} Download complete</span>
        </div>
      </div>
    )
  }
}

ProgressBarDownload.PropTypes = {
  bytesLoaded: PropTypes.number,
  bytesTotal: PropTypes.number,
}

export default ProgressBarDownload
