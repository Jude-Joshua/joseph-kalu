import React from 'react';

import PageDivider from "../components/PageDivider.tsx";
import {ScrollingText} from "../components/ScrollingText.tsx";
import {ProjectCardCol} from "../components/ProjectCard.tsx";

import Db from "../data/db.tsx";

const Portfolio: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-start justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-center"}>
                        <h2 className={"h2 text-center"}>
                            Selected <span id={"highlight"}>Work</span>
                        </h2>
                        <ScrollingText txt={'Because Design is a dish best served hot'} size={'small'} emoji={'🔥'}/>
                    </div>
                </div>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <PageDivider/>

                <article className={'caseStudies'}>
                    <div className={'caseStudies-holder flex flex-row'}>
                        {Object.values(Db).map((project, index) => (
                                <ProjectCardCol title={project.title} projectName={project.projectName}
                                             presentationImage={`/projects/${(project.projectName).toLowerCase()}/${project.presentationImage}`} key={index}/>
                        ))}
                    </div>
                </article>

                <PageDivider/>
            </section>
        </>
    )
}

export default Portfolio