import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
    console.log("searchBar1 log 11111", e.target.value);
  }
  render() {
    return (
      <form>
        <input 
          style={{ color: 'black' }}
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;