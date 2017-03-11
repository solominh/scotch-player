import Details from '../components/Details';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    track: state.selectedTrack,
  }
}


export default connect(mapStateToProps)(Details);

