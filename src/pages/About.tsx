import PageDivider from "../components/PageDivider.tsx";
import Links from "../components/Links.tsx";
import ImageComponent from "../components/ImageComponent.tsx";

import ProfileImage from "../assets/images/profile.webp"
import {ScrollingText} from "../components/ScrollingText.tsx";
import React from "react";

import career01 from "../assets/images/career-1.webp"
import career02 from "../assets/images/career-2.webp"

import educ from "../assets/images/educ.webp"

import feature01 from "../assets/images/feature-1.webp"
import feature02 from "../assets/images/feature-2.webp"

import more01 from "../assets/images/more-1.webp"
import more02 from "../assets/images/more-2.webp"

const career = {
    1: {
        "company": "Kenvue Inc. (Johnson & Johnson)",
        "year": "2023 - Present",
        "role": "Digital Experience Design Lead"
    },
    2: {
        "company": "Meaningful Gigs",
        "year": "2022 - Present",
        "role": "UX Creative Partner"
    },
    3: {
        "company": "CoinHaven",
        "year": "2022 - 2023",
        "role": "UX/UI Designer"
    },
    4: {
        "company": "SystemSpecs Group",
        "year": "2021 - 2023",
        "role": "Digital Experience Design Lead"
    },
    5: {
        "company": "SlateMall",
        "year": "2019 - 2021",
        "role": "User Experience Designer"
    }
}

const education = {
    1: {
        "school": "Talinn University",
        "degree": "MSc Human Computer Interaction",
    },
    2: {
        "school": "Product School",
        "degree": "How to Build Digital Products",
    },
    3: {
        "school": "Udacity",
        "degree": "User Experience Nanodegree",
    },
    4: {
        "school": "IBM",
        "degree": "Enterprise Design Thinking Practitioner",
    }
}

const features = {
    1: {
        "feature": "Chapter Lead",
        "where": {
            1: {
                "place": "ACM SIGCHI Lagos",
                "url": "https://www.linkedin.com/company/acmsigchilagos/"
            }
        },
    },
    2: {
        "feature": "Associated Professional Member",
        "where": {
            1: {
                "place": "Association for Computing Machinery (ACM)",
                "url": "https://www.acm.org/"
            }
        },
    },
    3: {
        "feature": "Speaker",
        "where": {
            1: {
                "place": "Innovate MTM '23",
                "url": ""
            }
        },
    },
    4: {
        "feature": "Speaker",
        "where": {
            1: {
                "place": "Abia Tech Flock 2024",
                "url": ""
            }
        },
    },
    5: {
        "feature": "Curator",
        "where": {
            1: {
                "place": "World Usability Day, Africa",
                "url": "https://wudafrica.com/"
            }
        },
    },
    6: {
        "feature": "Mentor",
        "where": {
            1: {
                "place": "DesignLab",
                "url": "https://app.designlab.com/josephkalu/"
            },
            2: {
                "place": "ADPList",
                "url": "https://adplist.org/mentors/joseph-kalu/"
            },
            3: {
                "place": "HNG Internship",
                "url": "https://hng.tech/"
            }
        },
    }
}

const About: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-center justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-start"}>
                        <div className={'header-content-hero-text-contain flex flex-col'}>
                            <p className={'h6 text-left'}>
                                About me:
                            </p>
                            <h2 className={"h4 text-left"}>
                                I love reducing complex <span id={"highlight"}>human</span> problems to simple and <span
                                id={"highlight"}> functional</span> products while lowering costs and increasing <span
                                id={"highlight"}>value </span>
                                for businesses.
                            </h2>
                        </div>
                        <div className={'header-action flex flex-row justify-center items-start'}>
                            <Links target={'_blank'} to={'https://calendar.app.google/enSbeLCHzZFYoFsj8'} classes={''} border={true}>
                                Discuss a project
                            </Links>
                            <Links target={'_blank'} to={'https://drive.google.com/file/d/1OclIPvx3r3kJrAMCKCgrCnPADyTB2fHu/view?usp=sharing'} classes={''} border={true}>
                               View my CV
                            </Links>
                        </div>
                    </div>
                    <div className={'header-content-hero-image'}>
                        <ImageComponent source={ProfileImage}
                                        altText={'A portrait of Jospeh Kalu in Green stripped shirt smiling'}
                                        className={'header-content-hero-image-img'}/>
                        <ScrollingText txt={'Currently leading impact for the team at Kenvue from Estonia'}
                                       size={'small'} emoji={'💼'}/>
                    </div>
                </div>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <PageDivider/>

                <article className={'list flex career flex-row justify-center items-start'}>
                    <div className={"list-image"}>
                        <ImageComponent source={career01} altText={''} className={''}/>
                        <ImageComponent source={career02} altText={''} className={''}/>
                    </div>
                    <div className="list-title flex flex-row justify-end items-center">
                        <p className={'p2'}>01.</p>
                        <h3 className={'h4'}>Career Highlights</h3>
                    </div>
                    <div className={'list-listing flex flex-col'}>
                        {Object.values(career).map((job, index) => (
                            <div className={`list-listing-hold w-full flex flex-col`} key={index}>
                                <span
                                    className="h6 list-listing-hold-topic">{job.company}, <span>{job.year}</span></span>
                                <span className="p1 list-listing-hold-year">{job.role}</span>
                            </div>
                        ))}
                    </div>
                </article>

                <PageDivider/>

                <article className={'list flex educ flex-row justify-center items-start'}>
                    <div className={"list-image"}>
                        <ImageComponent source={educ} altText={''} className={''}/>
                    </div>
                    <div className="list-title flex flex-row justify-end items-center">
                        <p className={'p2'}>02.</p>
                        <h3 className={'h4'}>Education</h3>
                    </div>
                    <div className={'list-listing flex flex-col'}>
                        {Object.values(education).map((school, index) => (
                            <div className={`list-listing-hold w-full flex flex-col`} key={index}>
                                <span
                                    className="h6 list-listing-hold-topic">{school.school}</span>
                                <span className="p1 list-listing-hold-year">{school.degree}</span>
                            </div>
                        ))}
                    </div>
                </article>

                <PageDivider/>

                <article className={'list flex feature flex-row justify-center items-start'}>
                    <div className={"list-image"}>
                        <ImageComponent source={feature01} altText={''} className={''}/>
                        <ImageComponent source={feature02} altText={''} className={''}/>
                    </div>
                    <div className="list-title flex flex-row justify-end items-center">
                        <p className={'p2'}>03.</p>
                        <h3 className={'h4'}>Features</h3>
                    </div>
                    <div className={'list-listing flex flex-col'}>
                        {Object.values(features).map((feature, index) => (
                            <div className={`list-listing-hold facts-container-fact w-full flex flex-col`} key={index}>
                                <p className="p1 list-listing-hold-year">
                                    {`${feature.feature} at `}
                                    {Object.values(feature.where).map((link, index, array) => (
                                        <span key={index}>
                                            {index > 0 && index < array.length - 1 ? ', ' : index > 0 && index === array.length - 1 ? ' and ' : ''}
                                            <Links target={'_blank'} to={link.url} classes={'p1'} border={true}>
                                                {link.place}
                                            </Links>
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </article>

                <PageDivider/>

                <article className={'list flex more flex-row justify-center items-start'}>
                    <div className={"list-image"}>
                        <ImageComponent source={more01} altText={''} className={''}/>
                        <ImageComponent source={more02} altText={''} className={''}/>
                    </div>
                    <div className="list-title flex flex-row justify-end items-center">
                        <p className={'p2'}>04.</p>
                        <h3 className={'h4'}>More about me</h3>
                    </div>
                    <div className={'list-listing flex flex-col'}>
                        <div className={`list-listing-hold abouter w-full flex flex-col`}>
                            <p className="p1 list-listing-hold-year">
                                When I’m not designing or doing design related works, I’m hanging out with friends at
                                the bar, going on a road trip or watching a movie at the cinema.
                            </p>
                            <p className="p1 list-listing-hold-year">
                                Yeah I love the smell of books too. Adventure, thriller and mysterious genre. Harry
                                potter is my fav, DaVinci code and Angels and Demons are awesome books.
                            </p>
                            <p className="p1 list-listing-hold-year">
                                I don’t have a thing for Pizza because I do more than a bite. But Kebab is heavenly. I
                                still don’t like Sushi though.
                            </p>
                        </div>
                    </div>
                </article>

                <PageDivider/>

            </section>
        </>
    )
}

export default About