import ReactSound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSongPlaying, onSongFinish } from '../actions/index';
import React, { Component } from 'react';

import { SOUNDCLOUD_CLIENT_ID as CLIENT_ID } from '../constants/APIKeys';

class Sound extends Component {

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
        onPlaying={this.props.onSongPlaying}
        onFinishedPlaying={this.props.onSongFinish} />
    )
  }
}


function mapStateToProps(state) {
  return {
    track: state.selectedTrack,
    playStatus: state.selectedTrackStatus.playStatus,
    playFromPosition: state.selectedTrackStatus.playFromPosition,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSongPlaying,
      onSongFinish,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sound);
