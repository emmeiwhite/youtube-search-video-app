import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos,onVideoSelect})=>{
    const resultVideos = videos.map((video) => {
        return (
            <VideoListItem 
                video={video} 
                key={video.etag}
                onVideoSelect={onVideoSelect}/>
        ) 
    });

    return(
        <ul className="col-md-4  list-group listContainer">
           {resultVideos}
        </ul>
    )
}

export default VideoList;