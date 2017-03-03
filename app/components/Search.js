import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  handleRenderItem(item, isHighlighted) {
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
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

  onInputChange(event, value) {
    this.setState({ value });
    this.props.search(value);
  }

  onItemSelect(value, item) {
    this.setState({ value });
    this.props.selectSong(item);
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
          onSelect={this.onItemSelect.bind(this)}
          onChange={this.onInputChange.bind(this)}
          renderItem={this.handleRenderItem.bind(this)}
        />
      </div>
    );
  }
}

export default Search
