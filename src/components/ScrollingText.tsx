import React from "react";
import iconMapping from './Icons.tsx'

interface ScrollingTextProps extends React.HTMLAttributes<HTMLDivElement> {
    txt: string;
    emoji: string;
    size: "small" | "full";
}

interface ScrollingImagesProps extends React.HTMLAttributes<HTMLDivElement> {
    images: Array<React.FC<React.SVGProps<SVGSVGElement>>>;
    size: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({txt, size, emoji, ...rest}) => {
    return (
        <div className={`scrolling-container ${size}`}>
            <div className={'scrolling-text flex items-center'} {...rest}>
                <div className={'c1 scrolling-text-item'}>{txt}{emoji}</div>
                <div className={'c1 scrolling-text-item'}>{txt}{emoji}</div>
            </div>
        </div>
    );
};

const ScrollingImages: React.FC<ScrollingImagesProps> = ({images, size, ...rest}) => {
    const IconComponent = iconMapping['Circle']

    const renderImages = () => {
        return images.map((SrcComponent, index) => (
            <React.Fragment key={index}>
                <SrcComponent/>
                <IconComponent size={8} className={'text-card-area-icon'} weight={'fill'}/>
            </React.Fragment>
        ));
    };
    return (
        <div className={`scrolling-container ${size} flex items-center`}>
            <div className={'scrolling-text flex items-center justify-start'} {...rest}>
                <div className={'scrolling-text-item flex flex-row items-center'}>
                    {renderImages()}
                </div>
                <div className={'scrolling-text-item flex flex-row items-center'}>
                    {renderImages()}
                </div>
                <div className={'scrolling-text-item flex flex-row items-center'}>
                    {renderImages()}
                </div>
            </div>
        </div>
    );
};

export {ScrollingText, ScrollingImages};
