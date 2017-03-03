import React, { Component } from 'react';
import axio from 'axios';


import Details from '../containers/Details';
import Player from '../containers/Player';
import Sound from '../containers/Sound';
import Progress from '../containers/Progress';
import Search from '../containers/Search';
import Footer from '../components/Footer';



class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.randomTrack();
  }

  render() {
    const track = this.props.selectedTrack;
    const artworkURL = track ? track.artwork_url : '';
    const smallArtworkURL = artworkURL.replace(/large/, 't500x500');
    console.log('track',this.props);
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
        <Details />
        <Sound />
        <Player />
        <Progress />
        <Footer />
      </div>
    );
  }
}

export default App
