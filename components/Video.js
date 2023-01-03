import React, { useEffect, useState } from 'react'


const Video = (props) => {
    const [src, setSrc] = useState("");

    useEffect(() => {
        setSrc(props.src);
    }, []);


    return (
        <>
            <video autoPlay loop muted={true} controls className="p-10 rounded-lg">
                <source src={src} type="video/mp4"   />
                Your browser does not support the video tag.
            </video>
        </>
    )
};

export default Video;
