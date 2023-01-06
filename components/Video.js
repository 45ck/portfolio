import React, { useEffect, useState } from 'react'


const Video = (props) => {
    const [src, setSrc] = useState("");

    useEffect(() => {
        setSrc(props.src);
    }, []);


    return (
        <>
            
        </>
    )
};

export default Video;
