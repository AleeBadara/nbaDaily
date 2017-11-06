import React from 'react';

const Video = (props) => {
    var videoId = `https://www.youtube.com/embed/${props.id.videoId}`;
    return (
        <div className="videoContainer">
            <div className="embed-responsive embed-responsive-16by9 ">
                <iframe className="embed-responsive-item" src={videoId}></iframe>
            </div>
        </div>
    )
}

export default Video;