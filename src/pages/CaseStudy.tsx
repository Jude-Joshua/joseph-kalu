import React from "react";
import {useParams} from "react-router-dom";

import ImageComponent from "../components/ImageComponent.tsx";

import Db from "../data/db.tsx";
import PageDivider from "../components/PageDivider.tsx";

const CaseStudy: React.FC = () => {

    const {projectName} = useParams();

    const project = Db.filter(project => project.projectName === projectName)[0]
    const rolesArray = project.tags.split(',').map(word => word.trim());
    const industryArray = project.industry.split(',').map(word => word.trim());

    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-col items-center justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-start"}>
                        <div className={'header-content-hero-text-contain flex flex-col'}>
                            <h2 className={"h2 text-center"}>
                                {project.title}
                            </h2>
                        </div>
                    </div>
                    <div className={'header-content-hero-image'}>
                        <ImageComponent
                            source={`/projects/${(project.projectName).toLowerCase()}/${project.presentationImage}`}
                            altText={'A portrait of Jospeh Kalu in Green stripped shirt smiling'}
                            className={'header-content-hero-image-img'}/>
                    </div>
                    <div className="case-study-intro-details-row flex flex-row justify-between w-full">
                        <div className="case-study-intro-details-row-section flex flex-col">
                            <h4 className="h4 case-study-intro-details-row-section-header">
                                Industry
                            </h4>
                            <p className={'p1'}>
                                {industryArray.map((role, index) => (
                                    <span className={''} key={index}>{role}</span>
                                ))}
                            </p>
                        </div>
                        <div className="casestudy-intro-details-row-section flex flex-col">
                            <h4 className="h4 casestudy-intro-details-row-section-header">
                                Year
                            </h4>
                            <p className={'p1'}>
                                <span className={''}>
                                    {project.year}
                                </span>
                            </p>
                        </div>
                        <div className="case-study-intro-details-row-section flex flex-col">
                            <h4 className="h4 case-study-intro-details-row-section-header">
                                Roles
                            </h4>
                            <p className={'p1'}>
                                {rolesArray.map((role, index) => (
                                    <span className={''} key={index}>{role}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <PageDivider/>
                <PageDivider/>
            </section>
        </>
    )
}

export default CaseStudy