import React, { Component } from 'react';

class Details extends React.PureComponent {


  render() {
    if (!this.props.track) {
      return null;
    }

    const track = this.props.track;
    const artworkURL = (track ? track.artwork_url : '') || './public/img/soundcloud.png';
    const smallArtworkURL = artworkURL.replace(/large/, 't500x500');
    

    return (
      <div className="details">
        <div className="detail-left" >
          <img src={smallArtworkURL} className="img-responsive" alt='artwork'/>
        </div>
        <div className="detail-right">
          <div className="title">{this.props.track.title}</div>
        </div>
      </div>
    )
  }

}

const types = React.PropTypes;
Details.PropTypes = {
  track: types.object,
}

export default Details
