import React from 'react';

const VideoDetail = ({video})=>{
    // In every Asynchronous call 
    if(!video){
        // While Data has not been served by the API, we render this JSX
        return <h1>"Loading ..."</h1> 
    }
    // console.log(video);
    const videoId = video.id.videoId;
    const youtube_url = `https://youtube.com/embed/${videoId}`

    return(
        <div>{videoId}</div>
    )
    
   
}

export default VideoDetail;