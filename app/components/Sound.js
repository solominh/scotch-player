import React, { Component, PropTypes } from 'react';
import ReactSound from 'react-sound';
import { SOUNDCLOUD_CLIENT_ID as CLIENT_ID } from '../constants/APIKeys';

class Sound extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.track) {
      return null;
    }

    let streamURL = this.props.track.stream_url;
    streamURL = `${streamURL}?client_id=${CLIENT_ID}`;

    return (
      <ReactSound
        url={streamURL}
        playStatus={this.props.playStatus}
        playFromPosition={this.props.playFromPosition}
        onPlaying={this.props.onPlaying}
        onFinishedPlaying={this.props.onFinishedPlaying} />
    )
  }
}

Sound.propTypes = {
  track: PropTypes.object,
  playStatus: PropTypes.string,
  playFromPosition: PropTypes.number,
  onPlaying: PropTypes.func,
  onFinishedPlaying: PropTypes.func,
}


export default Sound;
