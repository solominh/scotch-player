import Search from '../components/Search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search, selectSong } from '../actions/index';
import _ from 'lodash';

function mapStateToProps({ searchedTracks }) {
  return {
    tracks: searchedTracks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    search: _.debounce((...args) => {
      dispatch(search(...args));
    }, 300),
    selectSong: (...args) => {
      dispatch(selectSong(...args));
    }
  }
  // return bindActionCreators(
  //   {
  //     search,
  //     selectSong,
  //   },
  //   dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

