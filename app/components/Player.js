import React, { Component, PropTypes } from 'react';
import axio from 'axios';


import PlayerButtons from '../containers/PlayerButtons';
import ReactSound from 'react-sound';
import ProgressBar from '../components/ProgressBar';
import ProgressBarDownload from '../components/ProgressBarDownload'
import ProgressTime from '../components/ProgressTime';
import VolumeButton from '../components/VolumeButton';

import { SOUNDCLOUD_CLIENT_ID as CLIENT_ID } from '../constants/APIKeys';

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playFromPosition: 0,
      downloadProgress: {
        bytesLoaded: 0,
        bytesTotal: 0,
      },
      trackProgress: {
        duration: 0,
        position: 0,
      },
      volume: 100,
    }
  }

  backward = () => {
    this.setState((prevState, props) => {
      const { duration, position } = prevState.trackProgress;
      const { playFromPosition } = prevState;
      let backwardPosition = position - 1000 * 10;
      if (backwardPosition < 0) backwardPosition = 0;
      if (backwardPosition === playFromPosition) backwardPosition -= 1;
      return { playFromPosition: backwardPosition }
    })
  }

  forward = () => {
    this.setState((prevState, props) => {
      let { duration, position } = prevState.trackProgress;
      let forwardPosition = position + 1000 * 10;
      if (forwardPosition > duration) forwardPosition = duration;
      return { playFromPosition: forwardPosition }
    })
  }

  onLoading = ({ bytesLoaded, bytesTotal, duration }) => {
    this.setState((prevState, props) => {
      return {
        downloadProgress: {
          bytesLoaded,
          bytesTotal,
        }
      }
    })
  }

  onPlaying = (audio) => {
    this.setState((prevState, props) => {
      const { duration, position } = audio;
      return {
        trackProgress: {
          duration,
          position,
        }
      }
    })
  }

  onFinishedPlaying = (audio) => {
    if (this.props.onFinishedPlaying) this.props.onFinishedPlaying()
  }

  getTrackURL() {
    let streamURL = this.props.selectedTrack.stream_url;
    streamURL = `${streamURL}?client_id=${CLIENT_ID}`;
    return streamURL;
  }

  onProgressBarClick = (e) => {
    console.log(e)
  }

  onVolumeChange = (volume) => {
    this.setState(() => {
      return { volume }
    })
  }

  render() {
    if (!this.props.selectedTrack) {
      return null;
    }

    return (
      <div className="player">
        <ReactSound
          url={this.getTrackURL()}
          track={this.props.selectedTrack}
          playStatus={this.props.playStatus}
          playFromPosition={this.state.playFromPosition}
          onLoading={this.onLoading}
          onPlaying={this.onPlaying}
          onFinishedPlaying={this.onFinishedPlaying}
          volume={this.state.volume}
        />

        <div className="progress-bar-music"
          onClick={this.onProgressBarClick}
        >
          <div id="progress-bar-player">
            <ProgressBarDownload
              {...this.state.downloadProgress} />
          </div>
          <div id="progress-bar-download">
            <ProgressBar
              {...this.state.trackProgress} />
          </div>
        </div>

        <div className="row-bottom">
          <PlayerButtons
            playStatus={this.props.playStatus}
            backward={this.backward}
            forward={this.forward}
          />
          <ProgressTime
            {...this.state.trackProgress}
          />
          <VolumeButton
            volume={this.state.volume}
            onVolumeChange={this.onVolumeChange}
          />
        </div>

      </div>
    );
  }
}


Player.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  selectedTrack: PropTypes.object,
  playStatus: PropTypes.string,
  backward: PropTypes.func,
  forward: PropTypes.func,
}

export default Player;
