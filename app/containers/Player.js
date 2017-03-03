import Player from '../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  moveBackward,
  moveForward,
  togglePlay,
  stop,
  playRandom,
} from '../actions/index';

function mapStateToProps(state) {
  return {
    playStatus: state.selectedTrackStatus.playStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      moveBackward,
      moveForward,
      togglePlay,
      stop,
      playRandom,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

