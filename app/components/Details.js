import React, { Component } from 'react';

class Details extends React.PureComponent {

  render() {
    if (!this.props.track) {
      return null;
    }

    return (
      <div className="details">
        <h3>{this.props.track.title}</h3>
      </div>
    )
  }

}

const types = React.PropTypes;
Details.PropTypes = {
  track: types.object,
}

export default Details
