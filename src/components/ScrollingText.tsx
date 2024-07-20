import React from "react";

interface ScrollingTextProps extends React.HTMLAttributes<HTMLDivElement> {
    txt: string;
    emoji: string;
    size: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({txt, size, emoji, ...rest}) => {
    return (
        <div className={`scrolling-container ${size}`}>
            <div className={'scrolling-text flex items-center'} {...rest}>
                <div className={'c1 scrolling-text-item'}>{txt}</div>
                <div className={'c1 scrolling-text-item'}>{emoji}</div>
                <div className={'c1 scrolling-text-item'}>{txt}</div>
                <div className={'c1 scrolling-text-item'}>{emoji}</div>
            </div>
        </div>
    );
};

export default ScrollingText;
