import Player from '../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  backward,
  forward,
  togglePlay,
  random,
} from '../actions/index';

function mapStateToProps(state) {
  return {
    playStatus: state.selectedTrackStatus.playStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backward,
      forward,
      togglePlay,
      random,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

