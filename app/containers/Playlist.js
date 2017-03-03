import Playlist from '../components/Playlist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectSong,
} from '../actions/index';

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectSong,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

