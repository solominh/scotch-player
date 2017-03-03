import React, { Component } from 'react';

class Details extends Component {

  render() {
    const title = this.props.track ? this.props.track.title : 'unknown';
    return (
      <div className="details">
        <h3>{title}</h3>
      </div>
    )
  }

}

export default Details
