import { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
