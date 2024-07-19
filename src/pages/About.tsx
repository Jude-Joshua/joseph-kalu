import PageDivider from "../components/PageDivider.tsx";
import Lists from "../components/Lists.tsx";
import Links from "../components/Links.tsx";

const About: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-start justify-center"}>
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
                        <Links to={'mailto:mrjosephkalu@gmail.com'} classes={'b1 text-left'} border={true}>
                            Discuss a project
                        </Links>
                    </div>
                    <div className={'header-content-hero-image'}>
                        <img alt={''} className="Picture" style={{
                            width: 316.69,
                            height: 368.94,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 256,
                            borderBottomRightRadius: 256,
                            borderBottomLeftRadius: 256,
                            border: '1px #105B57 solid'
                        }} src="https://via.placeholder.com/317x369"/>
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