import Search from '../components/Search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search, selectSong } from '../actions/index';

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      search,
      selectSong,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
