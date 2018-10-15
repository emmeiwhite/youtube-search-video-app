import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos})=>{
    const resultVideos = videos.map(video=>{
        return <VideoListItem video={video}/>
    })

    return(
        <ul className="col-md-4 list-group">
           {resultVideos}
        </ul>
    )
}

export default VideoList;