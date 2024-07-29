import React from "react";

import ImageComponent from "./ImageComponent.tsx";

import {ArrowRight} from "@phosphor-icons/react";
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
const ProjectCardRow: React.FC<ProductCardRowProps> = ({title, projectName, tags, presentationImage, description}) => {
    const tagsArray = tags.split(',').map(word => word.trim());

    return (
        <div className="ProjectCaard flex flex-row items-center justify-start w-full">
            <div className="ProjectCaard-image">
                <ImageComponent source={presentationImage} altText={'case study cover image'}
                                className={"presentation-cover"}/>
            </div>
            <div className="ProjectCaard-info flex flex-col items-start justify-start">
                <div className="ProjectCaard-info-data flex flex-col items-start justify-start">
                    <div className="h4 ProjectCaard-info-data-title">
                        <span className={'ProjectCaard-info-data-title-name'}>{projectName}</span>
                        <span> - </span>
                        <span>{title}</span>
                    </div>
                    <p className="p1 ProjectCaard-info-data-description">
                        {description}
                    </p>
                </div>
                <div className="ProjectCaard-info-tags flex flex-row justify-start items-center">
                    {tagsArray.map((tag, index) => (
                        <p className={'c1 tag'} key={index}>{tag}</p>
                    ))}
                </div>
                <Button to={`/work/${projectName}`}>
                    <span className="b1 button-text">
                        View case study
                    </span>
                    <div className="button-icon">
                        <ArrowRight size={16} weight={'bold'}/>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export {ProjectCardCol, ProjectCardRow};
