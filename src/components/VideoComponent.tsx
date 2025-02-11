import React from "react";

interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
    source: string;
}

const ImageComponent: React.FC<VideoProps> = ({ source }) => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="case-study-video"
        >
            <source
                src={source}
                type={`video/mp4`}
            />
            Your browser does not support the video tag.
        </video>
    );
};

export default ImageComponent;
