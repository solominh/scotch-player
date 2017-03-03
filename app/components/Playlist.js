import React, { Component } from 'react';
import ClassNames from 'classnames';

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ul className="list-group">
        {this.props.tracks.map((track) => {
          return (
            <li className="list-group-item">track.title</li>
          )
        })}
      </ul>
    )
  }

}

const types = React.PropTypes;
Playlist.propTypes = {
  tracks: types.arrayOf(types.object),
}

export default Playlist;
