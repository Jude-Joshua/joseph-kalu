import React from 'react';

import PageDivider from "../components/PageDivider.tsx";
import TextCard from "../components/TextCard.tsx";
import ImageComponent from "../components/ImageComponent.tsx";
import {ScrollingImages} from "../components/ScrollingText.tsx";
import {ProjectCardRow} from "../components/ProjectCard.tsx";
import Links from "../components/Links.tsx";
import iconMapping from "../components/Icons.tsx";

import HomeGlobe from "../assets/images/home-globe.webp";
import Client01 from "../assets/images/clients/JNJ.svg";
import Client02 from "../assets/images/clients/meaningfulGigs.svg";
import Client03 from "../assets/images/clients/Designlab.svg";
import Client04 from "../assets/images/clients/KENVUE.svg";
import Client05 from "../assets/images/clients/adplist.svg";

import {ArrowLeft, ArrowRight} from "@phosphor-icons/react";
import Reviewer01 from "../assets/images/erin.webp";

import Db from "../data/db.tsx";
const projects = Db.filter(project => project.featured)


const roles = ["Design leader", "Design Strategist", "Community Builder"]
const textCards = {
    1: {
        "title": 'Currently working at Kenvue',
        "iconName": 'Briefcase',
        "copyOne": 'The team at Kenvue is a mix of creativity, collaboration, and innovativeness over a cup of coffee.',
        "copyTwo": 'As the design leader, I harness each member\'s unique blend of ingenuity to drive the creation of our products.',
        "linker": 'Send me an email',
        "linkLocation": 'mailto:mrjosephkalu@gmail.com'
    },
    2: {
        "title": "Open source projects",
        "iconName": 'GitPullRequest',
        "copyOne": 'My weekends are spent on building free and useful projects for the community.',
        "copyTwo": 'I currently offer free resources on the Figma Community for designers, including icons, design systems, and plugins, to enhance their creative work.',
        "linker": 'Learn more about me',
        "linkLocation": '/about'
    },
    3: {
        "title": "Giving back to the community",
        "iconName": 'Globe',
        "copyOne": '“We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.” Jeff Warner',
        "copyTwo": 'I mentor and build tech communities.',
        "linker": 'Discover my impact',
        "linkLocation": '/talks'
    },
}
const clientLogos = [Client01, Client02, Client03, Client04, Client05]

const Home: React.FC = () => {
    const IconComponent = iconMapping['Circle']

    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-center justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-start"}>
                        <div className={'header-content-hero-text-contain flex flex-col'}>
                            <div
                                className={'header-content-hero-text-contain-roles flex flex-row justify-start items-center'}>
                                {roles.map((role, index) => (
                                    <React.Fragment key={index}>
                                        <p className={'h6 text-left'}>
                                            {role}
                                        </p>
                                        {index < roles.length - 1 && (
                                            <IconComponent size={10} className={'text-card-area-icon'} weight={'fill'}/>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <h2 className={"h1 text-left w-full"}>
                                helping <span id={"highlight"}>product owners </span> create unique product
                                experiences and achieve profitability
                            </h2>
                        </div>
                        <div className={'text-cards-row flex flex-row items-start justify-center'}>
                            {Object.values(textCards).map((content, index) => (
                                <TextCard iconName={content.iconName} title={content.title} copyOne={content.copyOne}
                                          copyTwo={content.copyTwo} link={content.linker}
                                          linkLocation={content.linkLocation} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
                <ImageComponent source={HomeGlobe} altText={'background-globe-image'}
                                className={'header-background-image'}/>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <article className={'clients'}>
                    <ScrollingImages images={clientLogos} size={'full'} type={'svg'}/>
                    <ScrollingImages images={clientLogos} size={'full'} type={'svg'}/>
                </article>
                <article className={'caseStudies'}>
                    <div className={'caseStudies-holder flex flex-col'}>
                        {Object.values(projects).map((project, index) => (
                            <React.Fragment key={index}>
                                <ProjectCardRow title={project.title} projectName={project.projectName}
                                             description={project.description} tags={project.tags}
                                             presentationImage={`/projects/${(project.projectName).toLowerCase()}/${project.presentationImage}`}/>
                                <PageDivider/>
                            </React.Fragment>
                        ))}
                    </div>
                </article>
                <PageDivider/>
                <article className={'testimonials flex flex-col'}>
                    <div className="article-title">
                        <div className="article-title-text flex flex-col">
                            <h3 className={'h3'}>Creating impact since 2019. These are the <span
                                id={'highlight'}>numbers</span></h3>
                        </div>
                    </div>
                    <PageDivider/>
                    <div className="facts-container flex flex-col">
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                5 years pioneering unique solutions
                            </p>
                            <p className="p1">
                                5+ years of working with dynamic teams to transform ideas into great products.
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                255+ mentees worldwide
                            </p>
                            <p className="p1">
                                <span>With a worldwide collage of impactful mentorship, I’ve guided designers from clueless to experts in their crafts. I mentor designers from <Links
                                    classes={'p1'} to={'https://app.designlab.com/josephkalu/'} target={'_blank'}
                                    border={true}>Designlab</Links> to <Links classes={''}
                                                                              to={'https://adplist.org/mentors/joseph-kalu/'}
                                                                              target={'_blank'}
                                                                              border={true}>ADPList</Links>.</span>
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                5 community contributions
                            </p>
                            <p className="p1">
                                From open source to community building, I’ve given back projects to the
                                community.
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                45+ completed projects
                            </p>
                            <p className="p1">
                                Led a design team of five and another team of three to deliver innovative
                                projects. Additionally, I've handled a substantial amount of freelance work for
                                various clients.
                            </p>
                        </div>
                    </div>
                    <PageDivider/>
                    <div className="review">
                        <div className="review-testimonial flex flex-row items-center justify-center">
                            <div className="button-icon">
                                <ArrowLeft size={'24'} weight={'regular'}/>
                            </div>
                            <div className="review-testimonial-person flex flex-col justify-center items-center">
                                <ImageComponent altText={'first Reviewer, Erin Skurdal'} source={Reviewer01}/>
                                <div className="review-testimonial-person-details flex flex-col">
                                    <p className="h6 text-center testimonial-person-details-name">
                                        Erin Skurdal
                                    </p>
                                    <p className="c1 text-center review-testimonial-person-details-position">
                                        Director, Global UX Design, Kenvue Inc.
                                    </p>
                                </div>
                            </div>
                            <div className="review-testimonial-review">
                                <p className="p1">
                                    Joseph was a member of my global UX design team for 18 months. During
                                    that time, I was grateful for the thoughtfulness he brought to every
                                    design challenge and his positive attitude which continuously elevated
                                    the results of the cross functional team he worked with. Joseph brought
                                    both a consumer and business-savvy mindset to his design decisions. He
                                    is committed to creating and leveraging design systems to drive
                                    consistent and efficient digital experiences. I hope I am able to hire
                                    Joseph again in the future. He will be missed until then.
                                </p>
                            </div>
                            <div className="button-icon right">
                                <ArrowRight size={'24'} weight={'regular'}/>
                            </div>
                        </div>
                    </div>
                </article>
                <PageDivider/>
                <article className={'brief flex flex-col'}>
                    <div className="article-title flex flex-col">
                        <div className="article-title-text flex flex-col">
                            <h3 className={'h3'}>Beyond the design desk...</h3>
                        </div>
                        <div className="article-title-text flex flex-row justify-end items-end">
                            <h3 className={'h3 text-right'}><span
                                id={'highlight'}>(when I’m not in front of pc screens)</span></h3>
                        </div>
                    </div>
                    <PageDivider/>
                    <div className="facts-container flex flex-col">
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                Participating in design panels and talks
                            </p>
                            <p className="p1">
                                <Links to={'https://files.fm/u/qk6uf5t34k'} target={'_blank'} classes={''}
                                       border={true}>GOMYCODE</Links> | <Links
                                to={'https://youtu.be/2esLBt4GpXU?si=x6_IUegQAVbyLZfG'} target={'_blank'}
                                classes={''}
                                border={true}>KOM</Links> | <Links
                                to={'#'} target={'_blank'} classes={''} border={true}>Abia Tech Flock</Links>
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                Writing think pieces
                            </p>
                            <p className="p1">
                                <Links to={'https://thenationonlineng.net/developing-nigeria-into-africas-tech-hub'}
                                       target={'_blank'} classes={''} border={true}>The Nation Newspaper</Links>
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                Collaborating on open-source community projects
                            </p>
                            <p className="p1">
                                <Links to={'#'}
                                       classes={'https://www.figma.com/community/file/1385981291431580402/memoji-emoji-illustrations'}
                                       target={'_blank'} border={true}>Memoji</Links> | <Links to={'#'}
                                                                                               target={'_blank'}
                                                                                               classes={''}
                                                                                               border={true}>Nebulon</Links>
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                Mentoring new and aspiring designers
                            </p>
                            <p className="p1">
                                <Links to={'https://app.designlab.com/josephkalu/'} target={'_blank'} classes={''}
                                       border={true}>Designlab</Links> | <Links
                                to={'https://adplist.org/mentors/joseph-kalu'} target={'_blank'}
                                classes={''}
                                border={true}>ADPList</Links>
                            </p>
                        </div>
                        <PageDivider/>
                        <div className="facts-container-fact flex flex-row justify-between items-start">
                            <p className="h6">
                                Hosting design workshops
                            </p>
                            <p className="p1">
                                <Links to={'https://youtu.be/bJvbAZ_seP8?si=O76um6aM0fxBxwMj'} target={'_blank'}
                                       classes={''} border={true}>WCAG 2.0 and UX</Links>
                            </p>
                        </div>
                    </div>
                </article>
                <PageDivider/>
            </section>
        </>
    )
}

export default Home