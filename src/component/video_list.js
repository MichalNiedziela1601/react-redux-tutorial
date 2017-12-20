import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videosMap = this.props.videos.map(video => {
            return <VideoListItem
                onVideoSelect = {this.props.onVideoSelect}
                video={video}
                key={video.etag}/>
        });
        return (
            <ul className="list-group col-md-4">
                {videosMap}
            </ul>
        )
    }
}