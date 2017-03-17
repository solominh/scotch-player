import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  handleRenderItem = (item, isHighlighted) => {
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#2582BE',
        padding: '2px 6px',
        cursor: 'default'
      }
    };
    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    )
  }

  onInputChange = (event, value) => {
    this.setState({ value });
    this.props.search(value);
  }

  onItemSelect = (value, item) => {
    this.setState({ value });
    this.props.selectSong(this.props.tracks, item);
  }

  render() {
    return (
      <div className="search">
        <Autocomplete
          ref="autocomplete"
          inputProps={{
            title: "Title",
            placeholder: "Search for songs",
          }}
          value={this.state.value}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.onItemSelect}
          onChange={this.onInputChange}
          renderItem={this.handleRenderItem}
          menuStyle={
            {
              borderRadius: '3px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2px 0',
              fontSize: '1em',
              position: 'fixed',
              overflow: 'auto',
              maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
              width: 'auto'
            }
          }
        />
      </div>
    );
  }
}

const types = React.PropTypes;
Search.propTypes = {
  tracks: types.arrayOf(types.object),
}

export default Search
