import Progress from '../components/Progress';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return { ...state.selectedTrackStatus.trackProgress };
}


export default connect(mapStateToProps)(Progress);
