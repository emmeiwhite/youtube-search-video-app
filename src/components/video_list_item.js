import React from 'react';

// Making a structure for the Videos coming from the API...A Component to wrap our Object in VideoList Component
const VideoListItem = ({video,onVideoSelect})=>{
    const imgUrl = video.snippet.thumbnails.default.url;
    return(
        <div className="video-item col-md-12">
            <li onClick={()=>onVideoSelect(video)} className="list-group-item">
                   <div className="video-list media">
                        <div className="media-left">
                            <img src={imgUrl} className="media-object" alt="Something Went Wrong ..."/>
                        </div>

                        <div className="media-body list-item-title">
                            <div className="media-heading">{video.snippet.title}</div>
                        </div>
                   </div>
            </li>
        </div>
    )
}

export default VideoListItem;