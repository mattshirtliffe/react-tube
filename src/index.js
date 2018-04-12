import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube Data API v3
// https://console.developers.google.com
const API_KEY = '';

class App extends Component {
// parent component for whole app


  constructor(props){
    super(props);
    // setting videos to empty till we get some.
    this.state = {videos: [],
    selectedVideo: null};

    // perform search with term coding tech my favorite YouTube channel
    this.videoSearch('coding tech');
  }

  videoSearch(term){
    // youtube-api-search with the api key and term
    // fat arrow functions :P
    YTSearch({key:API_KEY,term:term}, (videos) => {
      this.setState({videos,selectedVideo: videos[0]});
    });
  }

  render() {
    // debounce to throttle we do this using just javascript?
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    // passing the videoSearch to the SearchBar component
    // pass first video to details
    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
