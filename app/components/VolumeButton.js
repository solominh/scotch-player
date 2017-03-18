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
    this.setState((prevState, props) => {
      return { isSliderVisible: !prevState.isSliderVisible };
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
      'fa fa-volume-off': volume <= 10,
      'fa fa-volume-down': volume > 10 && volume <= 70,
      'fa fa-volume-up': volume > 70,
    });

    return (
      <div className="volume-button">
        <button
          className="player-btn"
          onClick={this.onVolumeButtonClick}>
          <i className={volumeClassNames}></i>
        </button>
        {this.state.isSliderVisible &&
          <div className="sound-slider" >
            <Slider
              vertical
              min={0}
              max={100}
              included={false}
              defaultValue={this.props.volume}
              onBeforeChange={this.onBeforeChange}
              onChange={this.onChange}
              onAferChange={this.onAfterChange}
            />
          </div>
        }
      </div>
    )
  }
}


VolumeButton.PropTypes = {
  volume: PropTypes.number,
  onVolumeChange:PropTypes.func,
}

export default VolumeButton;

