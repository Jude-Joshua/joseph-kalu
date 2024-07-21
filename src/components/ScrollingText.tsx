import React from "react";
import iconMapping from './Icons.tsx'
import ImageComponent from "./ImageComponent.tsx";

interface ScrollingTextProps extends React.HTMLAttributes<HTMLDivElement> {
    txt: string;
    emoji: string;
    size: "small" | "full";
}

interface ScrollingImagesProps extends React.HTMLAttributes<HTMLDivElement> {
    images: string[];
    size: string;
    type: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({txt, size, emoji, ...rest}) => {
    return (
        <div className={`scrolling-container ${size}`}>
            <div className={'scrolling-text flex items-center'} {...rest}>
                <div className={'c1 scrolling-text-item'}><span>{txt}</span><span>{emoji}</span></div>
                <div className={'c1 scrolling-text-item'}><span>{txt}</span><span>{emoji}</span></div>
            </div>
        </div>
    );
};

const ScrollingImages: React.FC<ScrollingImagesProps> = ({images, size, type, ...rest}) => {
    const IconComponent = iconMapping['Circle']

    const renderImages = () => {
        if (type === 'svg') {
            return images.map((SrcComponent, index) => (
                <React.Fragment key={index}>
                    <SrcComponent/>
                    <IconComponent size={8} className={'text-card-area-icon'} weight={'fill'}/>
                </React.Fragment>
            ));
        }
        if (type === 'image') {
            return images.map((SrcComponent, index) => (
                <React.Fragment key={index}>
                    <ImageComponent source={SrcComponent} altText={`Number ${index+1} design exploration on Dribble`}/>
                </React.Fragment>
            ));
        }
        return null;
    };

    const renderDivs = () => {
        const count = type === 'svg' ? 3 : type === 'image' ? 1 : 0;
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} className={'scrolling-text-item flex flex-row items-center'}>
                {renderImages()}
            </div>
        ));
    };

    return (
        <div className={`scrolling-container ${size} flex items-center`}>
            <div className={'scrolling-text flex items-center justify-start'} {...rest}>
                {renderDivs()}
            </div>
        </div>
    );
};

export {ScrollingText, ScrollingImages};
