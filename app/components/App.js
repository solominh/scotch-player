import React, { Component } from 'react';


import Details from '../containers/Details';
import Player from '../containers/Player';
import Search from '../containers/Search';
import Footer from '../components/Footer';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container-fluid app">
        <Search />
        <div className="main-player">
          <Details
            track={this.props.track}
          />
          <Player />
        </div>
      </div>
    );
  }
}

export default App
