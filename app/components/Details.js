import React, { Component, PropTypes } from 'react';

class Details extends React.PureComponent {


  render() {
    if (!this.props.selectedTrack) {
      return null;
    }

    const track = this.props.selectedTrack;
    const artworkURL = (track ? track.artwork_url : '') || './public/img/soundcloud.png';
    const smallArtworkURL = artworkURL.replace(/large/, 't500x500');


    return (
      <div className="detail">
        <div className="detail-left" >
          <img src={smallArtworkURL} className="img-responsive" alt='artwork' />
        </div>
        <div className="detail-right">
          <div className="title">{this.props.selectedTrack.title}</div>
        </div>
      </div>
    )
  }

}

Details.PropTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  selectedTrack: PropTypes.object,
}

export default Details
