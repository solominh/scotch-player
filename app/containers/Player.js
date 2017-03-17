import Player from '../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  random,
  stepBackward,
  stepForward,
  togglePlay,
  onPlaying,
  onFinishedPlaying,
} from '../actions/index';

function mapStateToProps(state) {
  return {
    track: state.selectedTrack,
    playStatus: state.playStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      random,
      stepBackward,
      stepForward,
      togglePlay,
      onPlaying,
      onFinishedPlaying,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

