import React, { Component } from 'react';



import Player from '../containers/Player';
import Search from '../containers/Search';
import Footer from '../components/Footer';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const track = this.props.selectedTrack;
    const artworkURL = track ? track.artwork_url : '';
    const smallArtworkURL = artworkURL.replace(/large/, 't500x500');
    console.log('track', this.props);
    const scotchStyle = {
      width: '500px',
      height: '500px',
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),   
      url(${smallArtworkURL})`
    }

    return (
      <div className="scotch_music" style={scotchStyle}>
        <Search />
        <Player />
        <Footer />
      </div>
    );
  }
}

export default App
