import PageDivider from "../components/PageDivider.tsx";
import Lists from "../components/Lists.tsx";
import Links from "../components/Links.tsx";
import ImageComponent from "../components/ImageComponent.tsx";

import ProfileImage from "../assets/images/profile.webp"
import ScrollingText from "../components/ScrollingText.tsx";

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
                        <Links to={'mailto:mrjosephkalu@gmail.com'} classes={''} border={true}>
                            Discuss a project
                        </Links>
                    </div>
                    <div className={'header-content-hero-image'}>
                        <ImageComponent source={ProfileImage} altText={'A portrait of Jospeh Kalu in Green stripped shirt smiling'} className={'header-content-hero-image-img'}/>
                        <ScrollingText txt={'Currently leading impact for the team at Kenvue from Estonia'} size={'small'} emoji={'💼'}/>
                    </div>
                </div>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <PageDivider/>

                <Lists type={'talks'}/>

                <PageDivider/>

                <Lists type={'articles'}/>

                <PageDivider/>
            </section>
        </>
    )
}

export default About