import React from 'react';

const VideoList = (props)=>{
    return(
        <ul>
           Total Number Of Videos: {props.videos.length}
        </ul>
    )
}

export default VideoList;