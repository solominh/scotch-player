import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


require('rc-slider/assets/index.css');
import Slider from 'rc-slider';

class VolumeButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSliderVisible: false,
    }
  }

  onVolumeButtonClick = () => {
    // Cache volume
    if (this.props.volume > 0) this.prevVolume = this.props.volume;

    const volume = this.props.volume <= 0 ? (this.prevVolume || 100) : 0;
    this.props.onVolumeChange(volume);
  }

  onVolumeButtonMouseOver = () => {
    this.setState((prevState, props) => {
      return { isSliderVisible: true };
    })
  }

  onVolumeButtonMouseOut = () => {
    this.setState((prevState, props) => {
      return { isSliderVisible: false };
    })
  }

  onBeforeChange = () => {

  }

  onChange = (value) => {
    this.props.onVolumeChange(value)
  }

  onAfterChange = () => {

  }

  render() {
    const volume = this.props.volume;
    const volumeClassNames = ClassNames({
      'fa fa-volume-off': volume < 25,
      'fa fa-volume-down': volume >= 25 && volume <= 75,
      'fa fa-volume-up': volume > 75,
    });

    return (
      <div className="volume-button"
        onMouseOver={this.onVolumeButtonMouseOver}
        onMouseOut={this.onVolumeButtonMouseOut}
      >
        <button
          className="player-btn"
          onClick={this.onVolumeButtonClick}>
          <i className={volumeClassNames}></i>
        </button>
        <div className="sound-slider"
          onMouseOver={this.onVolumeButtonMouseOver}
          onMouseOut={this.onVolumeButtonMouseOut}
          style={{ visibility: this.state.isSliderVisible ? 'visible' : 'hidden' }}>
          <Slider
            vertical
            min={0}
            max={100}
            included={false}
            value={this.props.volume}
            onBeforeChange={this.onBeforeChange}
            onChange={this.onChange}
            onAferChange={this.onAfterChange}
          />
        </div>
      </div>
    )
  }
}


VolumeButton.PropTypes = {
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
}

export default VolumeButton;

