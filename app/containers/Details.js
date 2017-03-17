import Details from '../components/Details';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps({ playerData }) {
  const { tracks, selectedTrack } = playerData
  return {
    tracks,
    selectedTrack,
  }
}


export default connect(mapStateToProps)(Details);

