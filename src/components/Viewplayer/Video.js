import React, {useEffect, useRef} from "react";

function Video(props) {
    const videoElem = useRef(null);

    useEffect(() => {
        videoElem.current.load(); 
    });

    return (
        <video className="media" loop muted autoPlay playsInline ref={videoElem}>
            <source src={`${process.env.PUBLIC_URL}/video/${props.src}`} type="video/webm"></source>
        </video>
    );
}

export default Video;