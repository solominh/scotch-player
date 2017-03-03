import Player from '../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  random,
  stepBackward,
  stepForward,
} from '../actions/index';

function mapStateToProps(state) {
  return {
    track: state.selectedTrack,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      random,
      stepBackward,
      stepForward,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

