import Player from '../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  onPlaying,
  onFinishedPlaying,
} from '../actions/index';

function mapStateToProps({playerData}) {
  return playerData;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPlaying,
      onFinishedPlaying,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

