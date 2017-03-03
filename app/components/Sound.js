import React, { Component } from 'react';
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

const types = React.PropTypes;

Sound.propTypes = {
  track: types.object,
  playStatus: types.string,
  playFromPosition:types.number,
  onPlaying: types.func,
  onFinishedPlaying: types.func,
}


export default Sound;
