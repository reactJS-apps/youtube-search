import { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
  state = {
    videos: [],
  };
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    console.log(term);
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
