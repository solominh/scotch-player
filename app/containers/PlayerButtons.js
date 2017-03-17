import PlayerButtons from '../components/PlayerButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  random,
  stepBackward,
  stepForward,
  togglePlay,
  loop,
} from '../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      random,
      stepBackward,
      stepForward,
      togglePlay,
      loop,
    },
    dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerButtons);

