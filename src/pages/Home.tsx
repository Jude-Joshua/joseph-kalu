import React from 'react';

import PageDivider from "../components/PageDivider.tsx";
import TextCard from "../components/TextCard.tsx";
import ImageComponent from "../components/ImageComponent.tsx";
import {ScrollingImages} from "../components/ScrollingText.tsx";
import iconMapping from "../components/Icons.tsx";

import HomeGlobe from "../assets/images/home-globe.webp";

import Client01 from "../assets/images/clients/JNJ.svg";
import Client02 from "../assets/images/clients/meaningfulGigs.svg";
import Client03 from "../assets/images/clients/Designlab.svg";
import Client04 from "../assets/images/clients/KENVUE.svg";
import Client05 from "../assets/images/clients/adplist.svg";

const roles = ["Design leader", "Design Strategist", "Community Builder"]
const textCards = {
    1: {
        "title": 'Currently working at Kenvue',
        "iconName": 'Briefcase',
        "copyOne": 'The team at Kenvue is a mix of creativity, collaboration, and innovativeness over a cup of coffee.',
        "copyTwo": 'As the design leader, I harness each member\'s unique blend of ingenuity to drive the creation of our products.',
        "linker": 'Send me an email',
        "linkLocation": '/'
    },
    2: {
        "title": "Open source projects",
        "iconName": 'GitPullRequest',
        "copyOne": 'My weekends are spent on building free and useful projects for the community.',
        "copyTwo": 'I currently offer free resources on the Figma Community for designers, including icons, design systems, and plugins, to enhance their creative work.',
        "linker": 'Learn more about me',
        "linkLocation": '/'
    },
    3: {
        "title": "Giving back to the community",
        "iconName": 'Globe',
        "copyOne": '“We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.” Jeff Warner',
        "copyTwo": 'I mentor and build tech communities.',
        "linker": 'Discover my impact',
        "linkLocation": '/'
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
                    <ScrollingImages images={clientLogos} size={'full'}/>
                    <ScrollingImages images={clientLogos} size={'full'}/>
                </article>


                <PageDivider/>
            </section>
        </>
    )
}

export default Home