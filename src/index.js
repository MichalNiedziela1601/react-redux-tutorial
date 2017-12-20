import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetails from './component/video_details';

const API_KEY = 'AIzaSyBXkXZtri86a47CdiiyNKlVSreOaEP41DE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.handleSearch('surfboards');

    }

    handleSearch (term) {
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        });
    };

    render() {
        const videoSearch = _.debounce((term) => { this.handleSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
            ;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));