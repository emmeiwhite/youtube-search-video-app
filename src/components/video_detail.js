import React from 'react';

const VideoDetail = ({video})=>{
    // In every Asynchronous call we are not sure about when data is going to come
    if(!video){
        // While Data has not been served by the API, we render this JSX
        return <h1>"Loading ..."</h1> 
    }
    // console.log(video);
    const videoId = video.id.videoId;
    const youtube_url = `https://youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-12 ">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={youtube_url} className="embed-responsive-item" title="all we need is an iframe"></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
    
   
}

export default VideoDetail;