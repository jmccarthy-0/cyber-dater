import React, {useEffect, useRef} from "react";

function Video(props) {
    const videoElem = useRef(null);

    useEffect(() => {
        videoElem.current.load(); 
    });

    return (
        <video className="media" loop muted autoPlay playsInline ref={videoElem}>
            <source src={`${process.env.PUBLIC_URL}/video/${props.src}`} type='video/webm; codecs="vp9"'></source>
            <source src={`${process.env.PUBLIC_URL}/video/${props.src.replace('VP9', 'VP8')}`} type='video/webm; codecs="vp8"'></source>
        </video>
    );
}

export default Video;