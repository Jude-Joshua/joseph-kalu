import React from "react";

import ImageComponent from "./ImageComponent.tsx";

import Button from "./Button.tsx";
import Links from "./Links.tsx";

interface ProductCardRowProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    projectName: string;
    tags: string;
    presentationImage: string;
    description: string;
}

interface ProductCardColProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    projectName: string;
    presentationImage: string;
}

const ProjectCardCol: React.FC<ProductCardColProps> = ({title, projectName, presentationImage}) => {
    return (
        <Links to={`/work/${projectName}`} classes={''} target={"_self"} border={false}>
            <div className="ProjectCaard flex flex-col items-start justify-start w-full">
                <div className="ProjectCaard-image">
                    <ImageComponent source={presentationImage} altText={'case study cover image'}
                                    className={"presentation-cover"}/>
                </div>
                <div className="ProjectCaard-info flex flex-col items-start justify-start">
                    <div className="ProjectCaard-info-title flex flex-col">
                        <span className={'h5 ProjectCaard-info-title-name'}>{projectName}</span>
                        <span className={'p1'}>{title}</span>
                    </div>
                </div>
            </div>
        </Links>
    );
};
const ProjectCardRow: React.FC<ProductCardRowProps> = ({projectName, tags, presentationImage, description}) => {
    return (
        <Button to={`/work/${projectName}`}>
            <div className="ProjectCaard flex flex-col items-center justify-start w-full">
                <div className="ProjectCaard-image">
                    <ImageComponent source={presentationImage} altText={'case study cover image'}
                                    className={"presentation-cover"}/>
                </div>
                <div className="ProjectCaard-info flex flex-row items-start justify-between">
                    <div className="ProjectCaard-info-data flex flex-row items-start justify-start">
                        <div className="h6 ProjectCaard-info-data-title">
                            <span>{description}</span>
                        </div>
                    </div>
                    <div className="c1 ProjectCaard-info-tags flex flex-row justify-start items-center">
                        {tags}
                    </div>
                </div>
            </div>
        </Button>
    );
};

export {ProjectCardCol, ProjectCardRow};
