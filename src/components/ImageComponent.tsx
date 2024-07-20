import React from "react";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    source: string;
    altText: string;
}

const ImageComponent: React.FC<ImageProps> = ({ altText, source, ...rest }) => {
    return (
        <img alt={altText} src={source} {...rest}/>
    );
};

export default ImageComponent;
