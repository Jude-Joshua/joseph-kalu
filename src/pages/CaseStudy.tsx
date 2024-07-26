import React, {useState} from "react";
import {useParams} from "react-router-dom";

import ImageComponent from "../components/ImageComponent.tsx";

import Data from "../data/db.tsx";
import PageDivider from "../components/PageDivider.tsx";
import {ArrowRight, FolderSimpleLock} from "@phosphor-icons/react";

interface ProjectDetails {
    [key: string]: string | ProjectDetails | string[];
}


const projectPassword = import.meta.env.VITE_PROJECT;

const CaseStudy: React.FC = () => {

    const {projectName} = useParams();

    const [inputPassword, setInputPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState("");

    const projects = Object.values(Data.projects)
    const project = projects.filter(project => project.projectName === projectName)[0]

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value);
        setError("");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handlePasswordSubmit();
        }
    };

    const handlePasswordSubmit = () => {
        if (inputPassword === projectPassword) {
            setIsAuthorized(true);
            setError("");
            setInputPassword("");
        } else if (inputPassword === '') {
            setError("Password field cannot be empty");
        } else {
            setError("You have entered an incorrect password");
        }
    };

    if (project.password && !isAuthorized) {
        return (
            <>
                <header className={'header locked flex flex-col justify-center items-center'}>
                    <div className={"header-content flex flex-row items-start justify-center"}>
                        <div className={"header-content-hero-text flex flex-col items-center"}>
                            <FolderSimpleLock size={160} weight={'thin'} className={'locked-icon'}/>

                            <p className={'p1 text-center'}>
                                This case study requires a password. Please enter it below to view this project or reach
                                out to me for more info.
                            </p>

                            <div className={'form-group flex flex-col items-center justify-center'}>
                                <div className={'input-group flex flex-col items-center justify-center'}>
                                    <input
                                        type="password"
                                        value={inputPassword}
                                        onChange={handlePasswordChange}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Enter password"
                                        className={`input-group-input p2 password-input ${error ? 'error' : ''}`}
                                    />
                                    {error && <p className="c1 error-text">{error}</p>}
                                </div>
                                <div onClick={handlePasswordSubmit}
                                     className="link-icon flex justify-center items-center">
                                    <ArrowRight size={32} weight={'light'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <PageDivider/>
                </section>
            </>
        )
    } else {
        const rolesArray = project.tags.split(',').map(word => word.trim());
        const industryArray = project.industry.split(',').map(word => word.trim());

        const projectdata = Object.values(Data['projects-details'])
        const projectDetails: ProjectDetails = projectdata.filter(project => project.projectName === projectName)[0]


        const renderProjectDetails = (details: ProjectDetails): JSX.Element => {
            const elements: JSX.Element[] = [];

            const createElement = (key: string, value: string | ProjectDetails | string[], isSubkey: boolean = false): JSX.Element | null => {

                if (typeof value === 'string' && value.trim()) {
                    const paragraphs = value.split('\n\n').map((paragraph, index) => (
                        <>
                            <p key={index}>{paragraph}</p>
                        </>
                    ));

                    return (
                        <>
                            <article key={key} className="main-div flex flex-col">
                                {isSubkey ? <h6 className={'h6'}>{key === 'desc' ? '' : key}</h6> :
                                    <h5 className={'h4'}>{key}</h5>}
                                {paragraphs}
                            </article>
                            <PageDivider/>
                        </>
                    );
                }

                if (typeof value === 'object' && !Array.isArray(value)) {
                    return (
                        <>
                            <article key={key} className="main-div flex flex-col">
                                <h5 className={'h4'}>{key}</h5>
                                <div className="main-div-section flex flex-col">
                                    {Object.keys(value).map((subKey) => {
                                        const subValue = value[subKey];

                                        if (typeof subValue === 'object' && !Array.isArray(subValue)) {
                                            return (
                                                <div className="main-div-section parts flex flex-col" key={subKey}>
                                                    {Object.keys(subValue).map((innerKey) => {
                                                        const innerValue = subValue[innerKey];

                                                        if (typeof innerValue === 'string'){
                                                            const innerParagraphs = innerValue.split('\n\n').map((innerParagraph, index) => (
                                                                <>
                                                                    <p key={index}>{innerParagraph}</p>
                                                                </>
                                                            ));

                                                            return (
                                                                <div className={'punny'} key={innerKey}>
                                                                    <p className={'h6'}>{innerKey}</p>
                                                                    <p>{innerParagraphs}</p>
                                                                </div>
                                                            );
                                                        }

                                                        return null;
                                                    })}
                                                </div>
                                            );
                                        }

                                        if (Array.isArray(subValue)) {
                                            return (
                                                <div key={subKey} className="main-div">
                                                    <div className="main-div-images">
                                                        {subValue.map((item, index) => (
                                                            <ImageComponent
                                                                key={`${subKey}-${index}`}
                                                                source={`/projects/${(project.projectName).toLowerCase()}/${item}`}
                                                                altText={`Image ${index + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        if(subValue.trim()){
                                            const paragraphs = subValue.split('\n\n').map((paragraph, index) => (
                                                <>
                                                    <p key={index}>{paragraph}</p><br/>
                                                </>
                                            ));
                                            return (
                                                <>
                                                    {paragraphs}
                                                </>
                                            );
                                        }

                                        return null;

                                    })}
                                </div>
                            </article>
                            <PageDivider/>
                        </>
                    );
                }

                return null;
            };

            Object.keys(details).forEach((key: string) => {
                if (key === 'projectName') return;

                const value = details[key];
                if (key && value !== undefined) {
                    const element = createElement(key, value);
                    if (element) elements.push(element);
                } else {
                    console.error(`Undefined key or value: ${key}`);
                }
            });


            return (
                <section className={'case-study-section flex flex-col w-full'}>
                    <PageDivider/>
                    {elements}
                </section>
            );
        };

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

                {renderProjectDetails(projectDetails)}

            </>
        )
    }

}

export default CaseStudy